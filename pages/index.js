import Layout from "../components/layout";
import { useEffect } from "react";
import React, { useContext } from "react";
import { store } from "../store";
import { getArea } from "../lib/areas";
import ReactPlayer from "react-player";
import io from "socket.io-client";

export default function Home() {
  const { state, dispatch } = useContext(store);
  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  });

  useEffect(() => {
    const socket = io();
    socket.on("now", (data) => console.log(data));
  }, []);

  const area = getArea(state.currentArea);
  const stream = area.streams ? area.streams[0].url : "";

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
