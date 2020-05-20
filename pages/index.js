import Layout from "../components/layout";
import { useEffect } from "react";
import React, { useContext } from "react";
import { store } from "../store";
import { getArea } from "../lib/areas";
import ReactPlayer from "react-player";
import socket from "../lib/socket";

function areaEffects({ area, dispatch }) {
  const effects = area.effects || [];
  const intervals = effects.map((effect) => {
    return setInterval(() => {
      dispatch((state) => effect.fn(state));
    }, effect.interval);
  });
  return () => {
    intervals.forEach(clearInterval);
  };
}

function setupSocket({ socket, currentArea, character, dispatch }) {
  socket.on("message", (data) => {
    console.log("receiving message");
    dispatch({ type: "add_message", value: data });
  });
  socket.on("character", (data) => console.log(data)); // todo the character (if necessary)
  socket.emit("join", { room: currentArea, character });
  // cleanup function for useEffect
  return () => {
    dispatch({ type: "empty_messages" });
    socket.emit("leave", { room: currentArea, character });
    socket.removeAllListeners("character");
    socket.removeAllListeners("message");
  };
}

export default function Home() {
  const { state, dispatch } = useContext(store);
  const { currentArea, character } = state;
  const area = getArea(currentArea);
  // const stream = area.streams ? area.streams[0].url : null;
  const stream = null;

  useEffect(() => {
    return areaEffects({ area, dispatch });
  }, [currentArea]);

  useEffect(() => {
    return setupSocket({ socket, currentArea, character, dispatch });
  }, [currentArea]);

  useEffect(() => {
    dispatch({ type: "persist_state" });
  });

  useEffect(() => {
    socket.emit("character", character);
  }, [character]);

  const mainContent = area.mainContent
    ? area.mainContent({ state, dispatch })
    : null;

  return (
    <Layout>
      {mainContent}
      {/* <h1> */}
      {/*   {area.name} {character.stamina} {character.username} */}
      {/* </h1> */}
      {/* <div id="twitch"></div> */}
      {/* {stream && <ReactPlayer controls url={stream} playing />} */}
    </Layout>
  );
}
