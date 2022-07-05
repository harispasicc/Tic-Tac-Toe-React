import React, { useState, useEffect } from "react";
import Header from "./Header";
import EndGame from "./Endgame";
import Board from "./Board";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { calculateWinner } from "./CalculateWinner";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [xIsNext, setXisNext] = useState(true);
  const [oIsNext, setOisNext] = useState(true);
  const [winner, setWinner] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [draw, setDraw] = useState("");
  const [countPl1, setCountPl1] = useState(0);
  const [countPl2, setCountPl2] = useState(0);
  const [countDraw, setCountDraw] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);
  const [date, setDate] = useState("");
  const [gameID, setGameID] = useState("");
  const [newDate, setNewDate] = useState("");
  const [availableSquares, setAvailableSquares] = useState(9);
  const [unoccupied, setUnoccupied] = useState("");

  const navigate = useNavigate();

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

  if (winner || draw) {
    localStorage.setItem("history", JSON.stringify(gameHistory));
  }
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

  const handleClick = i => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) {
      setUnoccupied("Choose unoccupied cell!");
      setTimeout(() => {
        setUnoccupied(false);
      }, 3000);

      return;
    }

    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
    setAvailableSquares(availableSquares - 1);

    const win = calculateWinner(boardCopy);

    if (win === "X") {
      const his1 = JSON.parse(localStorage.getItem("history"));
      if (his1) {
        setGameHistory(his1);
      }
      setWinner(player1);
      setAvailableSquares(9);
      setBoard(Array(9).fill(null));
      setXisNext(xIsNext);
      setCountPl1(countPl1 + 1);
    }
    if (win === "O") {
      setWinner(player2);
      const his2 = JSON.parse(localStorage.getItem("history"));
      if (his2) {
        setGameHistory(his2);
      }

      setAvailableSquares(9);
      setBoard(Array(9).fill(null));
      setOisNext(oIsNext);
      setCountPl2(countPl2 + 1);
    }
    if (availableSquares <= 1 && !win) {
      setDraw("DRAW!");
      setCountDraw(countDraw + 1);
      const his3 = JSON.parse(localStorage.getItem("history"));
      if (his3) {
        setGameHistory(his3);
      }
    }
  };

  const handleRestart = () => {
    setGameHistory(localStorage.removeItem("history"));
    setPlayer1("");
    setPlayer2("");
    setWinner("");
    setDraw("");
    navigate("/");
  };

  const handleTryAgain = () => {
    setBoard(Array(9).fill(null));
    setXisNext(true);
    setWinner("");
    setDraw("");
    setAvailableSquares(9);
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
      <div className="next-p">
        <p>{"Next Player: " + (xIsNext && oIsNext ? player1 : player2)}</p>
      </div>
      {unoccupied && <p className="bg-warning">{unoccupied}</p>}
      <Board
        playerF={player1}
        playerS={player2}
        squares={board}
        onClick={handleClick}
      />
      <div className="container"></div>
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
