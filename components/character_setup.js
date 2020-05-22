import React, { useContext, useState } from "react";
import { store } from "../store";
import { v4 as uuidv4 } from "uuid";

export default function CharacterSetup() {
  const {
    state: { character },
    dispatch,
  } = useContext(store);
  const [username, setUsername] = useState(character.username);
  const onSubmit = (e) => {
    e.preventDefault();
    const name = username.replace(/\W{2,}/, " ")
    dispatch({ type: "set_character", value: { ...character, username: name.trim(), id: uuidv4() } });
  };

  return (
    <div className="container">
      <h1>Wähle einen Namen</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Name</label>
        <input
          maxLength={24}
          minLength={1}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          value={username}
        />
        <br/>
        <button type="submit">Speichern</button>
      </form>
    </div>
  );
}
