import React from "react";

function Board() {
  return (
    <div className="container">
      <table>
        Turn: {turn}
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
