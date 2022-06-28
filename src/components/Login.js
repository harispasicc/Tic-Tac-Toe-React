import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "../index.css";

function Login() {
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("Player 1", JSON.stringify(playerOne));
    localStorage.setItem("Player 2", JSON.stringify(playerTwo));
  }, [playerOne, playerTwo]);

  const startHandler = e => {
    e.preventDefault();
    navigate("/game");
  };

  return (
    <div>
      <Header />
      <form className="login">
        <div className="input-player1">
          <p>Player 1</p>
          <input
            type="text"
            value={playerOne}
            name="player1"
            placeholder="Player 1"
            onChange={e => setPlayerOne(e.target.value)}
            required
          />
        </div>
        <div className="input-player2">
          <p>Player 2</p>
          <input
            type="text"
            value={playerTwo}
            name="player2"
            placeholder="Player 2"
            onChange={e => setPlayerTwo(e.target.value)}
            required
          />
        </div>
        <button
          disabled={!playerOne || !playerTwo}
          onClick={startHandler}
          type="submit"
        >
          Start
        </button>
      </form>
    </div>
  );
}

export default Login;
