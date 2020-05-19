export const areas = [
  // ENTRY
  {
    id: "entry",
    name: "Eingang",
    effects: [
      {
        fn: (character) => {
          return { ...character, stamina: character.stamina - 1 };
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
  },

  // JOHNNY
  {
    id: "johnny",
    name: "Johnny",
    effects: [
      {
        fn: (character) => {
          return { ...character, stamina: character.stamina + 1 };
        },
        interval: 3000,
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
  },
];

export function getArea(id) {
  return areas.find((a) => a.id === id);
}
