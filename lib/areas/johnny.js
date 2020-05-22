import { goToRoom } from "../areas"

export default {
  id: "johnny",
  name: "Johnny",
  effects: [
    // fn will be called every 3 seconds and will be passed the current state
    {
      fn: (state) => {
        const character = {
          ...state.character,
          stamina: state.character.stamina + 1,
        };
        return { ...state, character };
      },
      interval: 500,
    },
  ],
  streams: [
    {
      url: "https://www.twitch.tv/videos/616872920",
    },
  ],
  cssClassesFn: (state) => {
    const container = state.character.stamina > 105 ? "light" : "dark";
    return {
      container,
    };
  },
  cssStylesFn: (_state) => {
    return {
      chatSection: {
        backgroundColor: "#00ff00",
      },
      contentSection: {
        backgroundImage: "url(/img/elfen.gif)",
      },
      contentSectionDiv: {
        backgroundColor: "#00ff00",
      },
    };
  },
  mainContent: ({ dispatch }) => {
    return (
      <>
        <h1>Nichts los hier wa?</h1>
        <div className="d-flex justify-content-around">
          <button
            className="mainButton"
            onClick={() => goToRoom({ dispatch, room: "entry" })}
          >
            zurück?
          </button>
        </div>
      </>
    );
  },
};
