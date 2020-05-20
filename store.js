import React, { createContext, useReducer } from "react";

const defaultState = {
  currentArea: "entry",
  character: {
    username: "jacke",
    stamina: 100,
  },
  messages: [],
};

function getInitialState() {
  if (typeof window !== "undefined") {
    const storageState = window.localStorage.getItem("state");
    return storageState
      ? { ...defaultState, ...JSON.parse(storageState) }
      : defaultState;
  }
  return defaultState;
}

const initialState = getInitialState();
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    if (action instanceof Function) {
      return action(state);
    } else {
      switch (action.type) {
        case "set_current_area":
          return { ...state, currentArea: action.value };
        case "set_character":
          return { ...state, character: action.value };
        case "persist_state":
          // window.localStorage.setItem("state", JSON.stringify(state));
          return state;
        case "add_message":
          return { ...state, messages: [action.value, ...state.messages] }
        default:
          throw new Error();
      }
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
