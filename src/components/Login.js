import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Login() {
  const navigate = useNavigate();

  const startHandler = e => {
    e.preventDefault();
    navigate("/tictactoe");
  };

  return (
    <form onSubmit={startHandler} className="login">
      <div className="input-player1">
        <p>Player 1</p>
        <input type="text" name="player1" placeholder="Player1" required />
      </div>
      <div className="input-player2">
        <p>Player 2</p>
        <input type="text" name="player2" placeholder="Player2" required />
      </div>
      <div>
        <button type="submit">Start</button>
      </div>
    </form>
  );
}

export default Login;
