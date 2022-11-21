import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setauthor] = useState("");
  const [color, setColor] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    newQuote();
  }, []);

  const colorPick = () => {
    const Colors = [
      "#342224",
      "#FB6964",
      "#77B1A9",
      "#E74C3C",
      "#F39C12",
      "#2C3E50",
      "#27AE60",
      "#73A857",
      "#BDBB99",
    ];
    const randomColor = Colors[Math.floor(Math.random() * Colors.length)];
    setColor(randomColor);
  };

  const newQuote = () => {
    const url = "https://api.quotable.io/random";
    axios.get(url).then((response) => {
      const data = response.data;
      const quote = data.content;
      const author = data.author;
      colorPick();
      setIsActive((current) => !current);
      setQuote(quote);
      setauthor(author);
    });
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <div className="container">
        <h1
          style={{ color: color }}
          className={isActive ? "text quote" : "text2 quote"}
        >
          <i className="fa-solid fa-quote-left"></i> {quote}
        </h1>

        <p
          style={{ color: color }}
          className={isActive ? "text author" : "text2 author"}
        >
          - {author}
        </p>

        <div className="buttons">
          <a href="https://www.twitter.com/intent/tweet" target="_blank">
            <i
              style={{ backgroundColor: color }}
              className="btn btn-icon fa-brands fa-twitter"
            ></i>
          </a>
          <a href="https://www.tumblr.com/" target="_blank">
            <i
              style={{ backgroundColor: color }}
              className="btn btn-icon fa-brands fa-tumblr"
            ></i>
          </a>
          <button
            style={{ backgroundColor: color }}
            className="btn quoteBtn"
            onClick={newQuote}
          >
            New Quote
          </button>
        </div>
      </div>
      <footer>
        <p className="credit author">by imtiaz</p>
      </footer>
    </div>
  );
}

export default App;
