const url = require("url");
const next = require("next");

const socketIO = require("socket.io");
const http = require("http");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

function getCharacters({ io, room }) {
  const clients = io.sockets.adapter.rooms[room]
  const sockets = clients ? clients.sockets : []
  return Object.keys(sockets).map((clientId) => {
    return io.sockets.connected[clientId].character;
  });
}

const requestListener = (req, res) => {
  // Be sure to pass `true` as the second argument to `url.parse`.
  // This tells it to parse the query portion of the URL.
  const parsedUrl = url.parse(req.url, true);
  handle(req, res, parsedUrl);
};

app.prepare().then(() => {
  const port = parseInt(process.env.PORT || "3000", 10);
  const server = http.createServer(requestListener);

  io = socketIO(server);
  io.on("connection", (socket) => {
    socket.on("disconnect", () => {
      console.log(socket.id, "disconnected");
    });
    socket.on("character", (character) => {
      socket.character = character;
      const rooms = Object.keys(socket.rooms).filter(r => r !== socket.id)
      if (rooms.length > 0) {
        socket.in(rooms[0]).emit("character", character)
      }
    });
    socket.on("join", ({ room, character }) => {
      socket.join(room, () => {
        const characters = getCharacters({ io, room });
        socket
          .in(room)
          .send({ text: `${character.username} joined ${room}!`, characters });
      });
    });
    socket.on("leave", ({ room, character }) => {
      socket.leave(room, () => {
        const characters = getCharacters({ io, room });
        socket
          .in(room)
          .send({ text: `${character.username} left ${room}!`, characters });
      });
    });
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
