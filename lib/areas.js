export const areas = [
  // ENTRY
  {
    id: "entry",
    name: "Eingang",
    effects: [
      {
        fn: (state) => {
          const character = {
            ...state.character,
            stamina: state.character.stamina - 1,
          };
          return { ...state, character };
        },
        interval: 1500,
      },
    ],
    connectsTo: [
      {
        id: "johnny",
      },
    ],
    streams: [
      {
        url: "https://www.youtube.com/watch?v=f2_aRlAAlKs",
      },
    ],
    classesFn: (state) => {
      const background = state.character.stamina > 100 ? "dark" : "light";
      return {
        background,
      };
    },
  },

  // JOHNNY
  {
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
    connectsTo: [
      {
        id: "entry",
      },
    ],
    cssClassesFn: (state) => {
      const container = state.character.stamina > 105 ? "light" : "dark";
      return {
        container,
      };
    },
  },
];

export function getArea(id) {
  return areas.find((a) => a.id === id);
}
