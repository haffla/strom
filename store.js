import React, { createContext, useReducer } from "react";

const defaultState = {
  currentArea: "entry",
  username: "jacke"
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
    switch (action.type) {
      case "set_current_area":
        return { ...state, currentArea: action.value };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
