import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState("");

  const emojiDictionary = {
    "😊": "Smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance",
    "☂️": "umbrella",
    "👌🏻": "Super",
    "🙏🏽": "Namaskar",
    "🤷🏾": "I don't know"
  };
  const emojis = Object.keys(emojiDictionary);
  console.log(emojis);

  function clickEventHandler(emoji) {
    setUserInput(emojiDictionary[emoji]);
  }
  function changeEventHandler(event) {
    var userInput = event.target.value;
    if (userInput in emojiDictionary) userInput = emojiDictionary[userInput];
    else userInput = "Could not find the Entered Input";
    setUserInput(userInput);
  }
  return (
    <div className="App">
      <div className="text-container">Emoji Interpreter!!</div>
      <input className="input-container" onChange={changeEventHandler} />
      <br />
      <div className="">{userInput}</div>
      <div className="emojis">
        {emojis.map((emoji) => (
          <span
            onClick={() => clickEventHandler(emoji)}
            className="emojis-container"
          >
            {" "}
            {emoji}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
