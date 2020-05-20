import classNames from "classnames";
import React, { useContext } from "react";
import { store } from "../store";
import { getArea } from "../lib/areas";
import DefaultHead from "./head";

export default function Layout({ children }) {
  const { state } = useContext(store);
  const { currentArea } = state;
  const area = getArea(currentArea);
  const cssClasses = area.cssClassesFn ? area.cssClassesFn(state) : {};
  const img = area.img;

  return (
    <div className={classNames(cssClasses.container)}>
      <DefaultHead title={area.name} />
      <main>
        <section
          className="contentSection"
          style={{ backgroundImage: `url(/img/${img})` }}
        >
          <div id="contentSectionDiv">{children}</div>
        </section>

        <section id="characterSection">
          <div id="character">
            <img id="characterImage" src="/img/character1.gif" />
            <p id="characterName">{state.character.username}</p>
          </div>
          <div id="characterStats">
            <img id="characterStatsImage" src="/img/character-stats.gif" />
          </div>
        </section>

        <section id="chatSection">
          <p id="chatDescriptionText">{area.name}</p>
          <input id="mainInput" />
          <div id="chatButtons">
            <button>Senden</button>
          </div>
        </section>
      </main>
    </div>
  );
}
