import React, { useState, useEffect } from "react";
import Header from "./Header";
import EndGame from "./Endgame";
import Board from "./Board";
import { useNavigate } from "react-router-dom";
import moment from "moment";

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
  const [gameHistory, setGameHistory] = useState([]);
  const [date, setDate] = useState("");
  const [gameID, setGameID] = useState("");
  const [newDate, setNewDate] = useState("");
  const [alreadyChosenMsg, setAlreadyChosenMsg] = useState("");
  const [gameEndMsg, setGameEndMsg] = useState("");
  const navigate = useNavigate();

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
        } else if (turn === player2) {
          setWinner(player2);
          setCountPl2(countPl2 + 1);
        }
      }

      if (cells[num] !== null) {
        setCount(count + 1);
      }

      if (count === 8 && cells[num] !== "") {
        setCountDraw(countDraw + 1);
        setDraw("DRAW!");
      } else if (
        count === 8 &&
        countPl1 !== countDraw &&
        countPl2 !== countDraw
      ) {
        setCountDraw(countDraw);
      }
    }
    return null;
  };

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
    setGameID(gameID + 1);
    setDate(newDate);
    setGameHistory([
      ...gameHistory,
      {
        gameId: gameID,
        date: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
        player1: JSON.parse(localStorage.getItem("Player 1")),
        player2: JSON.parse(localStorage.getItem("Player 2")),
        winner: winner,
        draw: draw,
      },
    ]);
  }, [winner, draw]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(gameHistory));
  }, [gameHistory]);

  const handleClick = num => {
    if (cells[num] !== "") {
      setAlreadyChosenMsg("Choose unoccupied cell!");
      setTimeout(() => {
        setAlreadyChosenMsg(false);
      }, 3000);
      return;
    }

    if (winner && cells[num] === "") {
      setGameEndMsg("Game has a winner, try again!");
      setTimeout(() => {
        setGameEndMsg(false);
      }, 3000);
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

  const handleTryAgain = () => {
    setCells(Array(9).fill(""));
    setCount(0);
    setTurn(null);
    setAlreadyChosenMsg("");
    setGameEndMsg("");
    setWinner("");
    setDraw("");
  };

  const handleRestart = () => {
    setGameHistory("");
    setPlayer1("");
    setPlayer2("");
    setWinner("");
    setDraw("");
    navigate("/");
  };

  return (
    <div>
      <Header
        count1={countPl1}
        count2={countPl2}
        tie={countDraw}
        playerF={player1}
        playerS={player2}
      />
      <div className="container">
        {alreadyChosenMsg && <p className="bg-warning">{alreadyChosenMsg}</p>}
        {gameEndMsg && <p className="bg-warning">{gameEndMsg}</p>}
        <Board handleClick={handleClick} cells={cells} turn={turn} />
      </div>
      <EndGame
        win={winner}
        draws={draw}
        tryAgain={handleTryAgain}
        gameHistory={gameHistory}
        restart={handleRestart}
      />
    </div>
  );
}

export default Game;
