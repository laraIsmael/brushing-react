import { useState } from "react";

function Square({
  value,
  handleClick,
}: {
  value: string;
  handleClick: () => void;
}) {
  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  function onSquareClick(i: number) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} handleClick={() => onSquareClick(0)} />
        <Square value={squares[1]} handleClick={() => onSquareClick(1)} />
        <Square value={squares[2]} handleClick={() => onSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={() => onSquareClick(3)} />
        <Square value={squares[4]} handleClick={() => onSquareClick(4)} />
        <Square value={squares[5]} handleClick={() => onSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={() => onSquareClick(6)} />
        <Square value={squares[7]} handleClick={() => onSquareClick(7)} />
        <Square value={squares[8]} handleClick={() => onSquareClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares: string[]) {
  const potentialWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < potentialWinner.length; i++) {
    const [a, b, c] = potentialWinner[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
