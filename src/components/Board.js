import React from "react";

function Board({ turn, handleClick, cells }) {
  const Cells = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };
  return (
    <div className="container">
      <table className="turn-title">
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
    </div>
  );
}

export default Board;
