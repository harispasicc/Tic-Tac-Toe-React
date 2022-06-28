import React from "react";
import "../index.css";

function Navbar({ count1, count2, tie, playerF, playerS }) {
  return (
    <nav className="navbar">
      <h1>Tic Tac Toe</h1>
      {playerF && playerS && (
        <div className="players">
          <div className="player1">
            <h3>
              {playerF}: {count1}
            </h3>
          </div>
          <div>
            <h3>
              {playerS}: {count2}
            </h3>
          </div>
          <div className="tie-nav">
            <h3>Ties: {tie}</h3>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
