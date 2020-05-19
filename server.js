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
    });
    socket.on("join", ({ room, username }) => {
      socket.join(room, () => {
        const characters = getCharacters({ io, room });
        io.sockets
          .in(room)
          .send({ text: `${username} joined ${room}!`, characters });
      });
    });
    socket.on("leave", ({ room, username }) => {
      socket.leave(room, () => {
        const characters = getCharacters({ io, room });
        io.sockets
          .in(room)
          .send({ text: `${username} left ${room}!`, characters });
      });
    });
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
