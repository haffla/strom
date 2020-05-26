import React, { useContext, useState } from "react";
import { store } from "../store";
import { v4 as uuidv4 } from "uuid";

export default function CharacterSetup({ imgs }) {
  const {
    state: { character },
    dispatch,
  } = useContext(store);
  const [username, setUsername] = useState(character.username);
  const [img, setImg] = useState(imgs[0]);
  const onSubmit = (e) => {
    e.preventDefault();
    const name = username.replace(/\W{2,}/, " ");
    dispatch({
      type: "set_character",
      value: { ...character, username: name.trim(), id: uuidv4(), img },
    });
  };
  const onImgChange = (e) => {
    setImg(e.target.value);
  };

  return (
    <div className="container">
      <h1>Wähle einen Character</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Name</label>
        <input
          maxLength={24}
          minLength={1}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          value={username}
        />
        <br />
        <div className="img-radios">
          {imgs.map((i) => (
            <label key={i}>
              <input
                id={i}
                onChange={onImgChange}
                name="img"
                type="radio"
                value={i}
                checked={i === img}
              />
              <img src={`/img/character_imgs/${i}`}></img>
            </label>
          ))}
        </div>
        <br />
        <button type="submit">Speichern</button>
      </form>
    </div>
  );
}
