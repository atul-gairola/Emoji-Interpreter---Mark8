import { emojisData } from "./emojiData";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Know your emojies</h1>
      </header>
      <main>
        <form className="inputForm">
          <input
            type="text"
            placeholder="Paste your emoji here to know it's name"
          />
          <button>Clear</button>
        </form>
        <div className="emojiContainer">
          {Object.keys(emojisData)
            .slice(0, 15)
            .map((key) => (
              <button className="emojiButton" id={key}>
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
