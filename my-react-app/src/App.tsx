import { useState } from "react";

function Square({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void;
}) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(""));

  function onSquareClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onClick={onSquareClick} />
        <Square value={squares[1]} onClick={onSquareClick} />
        <Square value={squares[2]} onClick={onSquareClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={onSquareClick} />
        <Square value={squares[4]} onClick={onSquareClick} />
        <Square value={squares[5]} onClick={onSquareClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={onSquareClick} />
        <Square value={squares[7]} onClick={onSquareClick} />
        <Square value={squares[8]} onClick={onSquareClick} />
      </div>
    </>
  );
}
