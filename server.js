const url = require("url");
const next = require("next");

const socketIO = require("socket.io");
const http = require("http");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

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
    socket.emit("now", { message: "hello" });
    socket.on("disconnect", () => {
      console.log(socket.id, "disconnected");
    });
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
