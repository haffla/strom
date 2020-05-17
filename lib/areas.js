export const areas = [
  {
    id: "entry",
    name: "Eingang",
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
  {
    id: "johnny",
    name: "Johnny",
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
