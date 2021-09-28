import { useState } from "react";

import { emojisData } from "./emojiData";
import "./App.css";

function App() {
  const [emoji, setEmoji] = useState("");
  const [emojiName, setEmojiName] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;

    setEmoji(value);

    if (emojisData[value]) {
      setEmojiName(emojisData[value]);
    } else {
      setEmojiName("Sorry can't recognize this emoji :(");
    }
  };

  const handleClick = (e) => {
    const { id } = e.target;

    setEmoji(id);
    setEmojiName(emojisData[id]);
  };

  return (
    <div className="app">
      <header>
        <h1>Know your emoji</h1>
      </header>
      <main>
        <form className="inputForm">
          <input
            type="text"
            placeholder="Paste your emoji here to know it's name"
            value={emoji}
            onChange={handleInputChange}
          />
        </form>
        <div className="value">{emoji && <p>{emojiName}</p>}</div>
        <div className="emojiContainer">
          {Object.keys(emojisData)
            .slice(0, 15)
            .map((key) => (
              <button
                className="emojiButton"
                id={key}
                key={key}
                onClick={handleClick}
              >
                {key}
              </button>
            ))}
        </div>
      </main>
      <footer className="footer">
        <p>
          Made with ❤️ by{" "}
          <a href="https://www.atulgairola.tech/">Atul Gairola </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
