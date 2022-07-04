import React from "react";

function EndGame({ win, draws, count2, tryAgain, restart, gameHistory }) {
  return (
    <div>
      <div className="messages">
        {win && (
          <div className="win-msg">
            <p>The {win} wins!</p>
            <button onClick={() => tryAgain()}>Wanna try again?</button>
            <button onClick={() => restart()}>Restart</button>
          </div>
        )}
        {!count2 && !win && draws && (
          <div className="draw-msg">
            <p>{draws}</p>
            <button onClick={() => tryAgain()}>Wanna try again?</button>
            <button onClick={() => restart()}>Restart</button>
          </div>
        )}
      </div>

      <div className="history">
        {gameHistory &&
          gameHistory.map(({ date, player1, player2, winner, draw }, id) => (
            <ul key={id}>
              {winner && (
                <p>
                  {date} {player1} vs {player2} {winner} won
                </p>
              )}
              {draw && (
                <p>
                  {date} {player1} vs {player2} {draw}
                </p>
              )}
            </ul>
          ))}
      </div>
    </div>
  );
}

export default EndGame;
