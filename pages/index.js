import Layout from "../components/layout";
import { useEffect } from "react";
import React, { useContext } from "react";
import { store } from "../store";
import { getArea } from "../lib/areas";
import ReactPlayer from "react-player";
import io from "socket.io-client";

export default function Home() {
  let socket = null;
  const { state, dispatch } = useContext(store);

  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  });

  useEffect(() => {
    socket = io();
    socket.on("message", (data) => console.log(data));
    socket.emit("character", { username: state.username })
    socket.emit("join", { room: state.currentArea, username: state.username });
    return () => socket.emit("leave", { room: state.currentArea, username: state.username })
  }, [state.currentArea]);

  const area = getArea(state.currentArea);
  // const stream = area.streams ? area.streams[0].url : null;
  const stream = null;

  return (
    <Layout>
      <h1>{area.name}</h1>
      <div id="twitch"></div>
      {area.connectsTo.map((c) => (
        <button
          key={c.id}
          onClick={() => dispatch({ type: "set_current_area", value: c.id })}
        >
          {getArea(c.id).name}
        </button>
      ))}
      {stream && <ReactPlayer controls url={stream} playing />}
    </Layout>
  );
}
