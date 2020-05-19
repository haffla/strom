import io from "socket.io-client";

function getSocket() {
  return io();
}

export default getSocket()
