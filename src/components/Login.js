import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Login() {
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);

  const navigate = useNavigate();

  const startHandler = e => {
    e.preventDefault();
    localStorage.setItem("Player 1", JSON.stringify(playerOne));
    localStorage.setItem("Player 2", JSON.stringify(playerTwo));
    navigate("/tictactoe");
  };

  return (
    <form className="login">
      <div className="input-player1">
        <p>Player 1</p>
        <input
          type="text"
          value={playerOne}
          name="player1"
          placeholder="Player1"
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
          placeholder="Player2"
          onChange={e => setPlayerTwo(e.target.value)}
          required
        />
      </div>
      <div>
        <button onClick={startHandler} type="submit">
          Start
        </button>
      </div>
    </form>
  );
}

export default Login;
