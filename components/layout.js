import classNames from "classnames";
import React, { useContext, useState } from "react";
import { store } from "../store";
import { getArea } from "../lib/areas";
import DefaultHead from "./head";
import { v4 as uuidv4 } from "uuid";
import socket from "../lib/socket";

export default function Layout({ children }) {
  const [inputText, setInputText] = useState("");
  const { state, dispatch } = useContext(store);
  const { currentArea } = state;
  const area = getArea(currentArea);
  const cssClasses = area.cssClassesFn ? area.cssClassesFn(state) : {};
  const areaStyles = area.cssStylesFn ? area.cssStylesFn(state) : {};
  const onChatSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch({ type: "add_message", value: { text: inputText, id } });
    socket.emit("message", { text: inputText, id, room: currentArea });
    setInputText("");
  };

  return (
    <div className={classNames(cssClasses.container)}>
      <DefaultHead title={area.name} />
      <main>
        <section className="contentSection" style={areaStyles.contentSection}>
          <div id="contentSectionDiv" style={areaStyles.contentSectionDiv}>
            {children}
          </div>
        </section>

        <section id="characterSection">
          <div id="character">
            <img id="characterImage" src={`/img/character_imgs/${state.character.img}`} />
            <p id="characterName">{state.character.username}</p>
          </div>
          <div id="characterStats">
            <img id="characterStatsImage" src="/img/character-stats.gif" />
          </div>
        </section>

        <section id="chatSection" style={areaStyles.chatSection}>
          <p id="chatDescriptionText">{area.name}</p>
          <div id="chatContainer">
            {state.messages.map((msg) => (
              <div key={msg.id} className="chat-message">
                {msg.text}
              </div>
            ))}
            <form onSubmit={onChatSubmit}>
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                id="mainInput"
              />
              <div id="chatButtons">
                <button type="submit">Senden</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
