import React, { useState } from "react";

function TicTacToe() {
  const [turn, setTurn] = useState("Player 1");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const [tie, setTie] = useState();

  const checkForWinner = squares => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach(pattern => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = num => {
    if (cells[num] !== "") {
      alert("Choose unoccupied cell!");
      return;
    }
    let squares = [...cells];
    if (turn === "Player 1") {
      squares[num] = "x";
      setTurn("Player 2");
    } else {
      squares[num] = "o";
      setTurn("Player 1");
    }
    checkForWinner(squares);
    setCells(squares);
  };

  const Cells = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  return (
    <div className="container">
      <table>
        turn: {turn}
        <tbody>
          <tr>
            <Cells num={0} />
            <Cells num={1} />
            <Cells num={2} />
          </tr>
          <tr>
            <Cells num={3} />
            <Cells num={4} />
            <Cells num={5} />
          </tr>
          <tr>
            <Cells num={6} />
            <Cells num={7} />
            <Cells num={8} />
          </tr>
        </tbody>
      </table>
      {winner ||
        (tie && (
          <>
            <p>The {winner} wins</p>
            <button onClick={() => handleRestart()}>Wanna try again?</button>
          </>
        ))}
    </div>
  );
}

export default TicTacToe;
