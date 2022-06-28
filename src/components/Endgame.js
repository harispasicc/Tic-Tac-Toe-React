import React from "react";

function EndGame({
  win,
  draws,
  count1,
  count2,
  tryAgain,
  restart,
  gameHistory,
}) {
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
        {gameHistory !== undefined || gameHistory.length !== 0
          ? gameHistory?.map(
              ({ date, player1, player2, winner, draw }, index) => (
                <ul key={index}>
                  {winner && (
                    <ul className="won">
                      {winner !== " " && winner !== null
                        ? date +
                          " " +
                          player1 +
                          " vs " +
                          player2 +
                          " " +
                          winner +
                          " won"
                        : null}
                    </ul>
                  )}
                  {!winner && draw !== " " && draw !== null
                    ? date + " " + player1 + " vs " + player2 + " " + draw
                    : null}
                </ul>
              )
            )
          : null}
      </div>
    </div>
  );
}

export default EndGame;
