import React, { useState, useEffect } from "react";

function Game() {
  const [turn, setTurn] = useState("");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [draw, setDraw] = useState("");
  const [count, setCount] = useState(0);
  const [countPl1, setCountPl1] = useState(0);
  const [countPl2, setCountPl2] = useState(0);
  const [countDraw, setCountDraw] = useState(0);
  const [history, setHistory] = useState([]);
  const [date, setDate] = useState("");
  const [gameId, setGameId] = useState("");
  const [newDate, setNewDate] = useState("");

  const checkForWinner = (squares, num) => {
    const combi = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combi.length; i++) {
      const [a, b, c] = combi[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        if (turn === player1) {
          setWinner(player1);
          setCountPl1(countPl1 + 1);
        } else {
          setWinner(player2);
          setCountPl2(countPl2 + 1);
        }
      }

      if (cells[num] !== null) {
        setCount(count + 1);
      }
      if (count === 8) {
        setDraw("DRAW!");
        setCountDraw(countDraw + 1);
      }
    }
    return null;
  };
  //pozivanje iz localS
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Player 1"));
    if (items) {
      setPlayer1(items);
    }
    const items2 = JSON.parse(localStorage.getItem("Player 2"));
    if (items2) {
      setPlayer2(items2);
    }
  }, [player1, player2]);

  useEffect(() => {
    setHistory([
      ...history,
      {
        date: date,
        player1: player1,
        player2: player2,
        winner: winner,
        draw: draw,
      },
    ]);
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  //turns
  const handleClick = num => {
    if (cells[num] !== "") {
      alert("Choose unoccupied cell!");
      return;
    }

    if (winner && cells[num] === "") {
      alert("Game has a winner, try again!");
      setCells(!squares);
    }

    let squares = [...cells];
    if (turn === player1) {
      squares[num] = "x";
      setTurn(player2);
    } else {
      squares[num] = "o";
      setTurn(player1);
    }
    checkForWinner(squares);
    setCells(squares);
  };

  //cells da te tipka
  const Cells = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
    setDraw(null);
    setCount(0);
    setTurn(null);
  };

  return (
    <div className="container">
      <table>
        It is {turn}'s turn
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
      {winner && (
        <>
          <p>The {winner} wins!</p>
          <button onClick={() => handleRestart()}>Wanna try again?</button>
        </>
      )}
      {!countPl2 && draw && (
        <>
          <p>{draw}</p>
          <button onClick={() => handleRestart()}>Wanna try again?</button>
        </>
      )}
      {/* {winner && (
        <p>
          {player1} vs {player2}
        </p>
      )}
      {winner && <p>{winner} won</p>} */}
      <p>Haris: {countPl1}</p>
      <p>Hamza: {countPl2}</p>
      <p>Ties: {countDraw}</p>
      <p>::{date}</p>
    </div>
  );
}

export default Game;
