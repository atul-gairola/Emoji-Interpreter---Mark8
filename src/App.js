function App() {
  return (
    <div className="App">
      <header>
        <h1>Know your emojies</h1>
      </header>
      <main>
        <input
          type="text"
          placeholder="Paste your emoji here to know it's name"
        />
        <div></div>
      </main>
      <footer>
        <p>
          Made with ❤️ by{" "}
          <a href="https://www.atulgairola.tech/">Atul Gairola </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
