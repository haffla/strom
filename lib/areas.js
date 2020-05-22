import entry from "./areas/entry"
import johnny from "./areas/johnny"

export const areas = [
  entry,
  johnny
];

export function goToRoom({ dispatch, room }) {
  dispatch({ type: "set_current_area", value: room });
}

export function getArea(id) {
  return areas.find((a) => a.id === id);
}
