import React, { useState, useEffect } from "react";
import "../index.css";

function Navbar() {
  // const [player1, setPlayer1] = useState("");
  // const [player2, setPlayer2] = useState("");

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("Player 1"));
  //   if (items) {
  //     setPlayer1(items);
  //   }
  //   const items2 = JSON.parse(localStorage.getItem("Player 2"));
  //   if (items2) {
  //     setPlayer2(items2);
  //   }
  // }, [player1, player2]);
  return (
    <nav className="navbar">
      <h1>Tic Tac Toe</h1>
      <div className="players">
        {/* <div className="player1">
          <h3>{player1}:</h3>
        </div>
        <div>
          <h3>{player2}:</h3>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
