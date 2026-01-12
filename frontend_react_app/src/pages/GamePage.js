import React, { useMemo, useState } from "react";
import Board from "../components/Board/Board";
import styles from "./GamePage.module.css";

/**
 * Calculates the winner for a 3x3 tic-tac-toe board.
 * @param {Array<"X"|"O"|null>} squares Board array length 9
 * @returns {"X"|"O"|null} Winner symbol if exists, else null
 */
function calculateWinner(squares) {
  const lines = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diags
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    const v = squares[a];
    if (v && v === squares[b] && v === squares[c]) return v;
  }

  return null;
}

/**
 * Determines whether the board is full with no empty squares.
 * @param {Array<"X"|"O"|null>} squares Board array length 9
 * @returns {boolean}
 */
function isBoardFull(squares) {
  return squares.every((v) => v !== null);
}

/**
 * Tic Tac Toe game page.
 * Renders a centered 3x3 game board with turn status, win/draw detection and reset.
 */
// PUBLIC_INTERFACE
export default function GamePage() {
  const [squares, setSquares] = useState(() => Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = useMemo(() => calculateWinner(squares), [squares]);
  const draw = useMemo(() => !winner && isBoardFull(squares), [winner, squares]);

  const currentPlayer = xIsNext ? "X" : "O";

  function handleSquareClick(index) {
    // Prevent moves after game ends, and prevent overwriting.
    if (winner || draw || squares[index]) return;

    setSquares((prev) => {
      const next = [...prev];
      next[index] = currentPlayer;
      return next;
    });
    setXIsNext((prev) => !prev);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const statusText = winner
    ? `Winner: ${winner}`
    : draw
      ? "Draw — no more moves!"
      : `Turn: ${currentPlayer}`;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.logoMark} aria-hidden="true" />
          <div>
            <h1 className={styles.title}>Tic Tac Toe</h1>
            <p className={styles.subtitle}>Local 2-player • X vs O</p>
          </div>
        </div>
      </header>

      <main className={styles.main} aria-label="Tic Tac Toe game">
        <section className={styles.card} aria-labelledby="game-status">
          <div className={styles.statusRow}>
            <div>
              <h2 id="game-status" className={styles.statusTitle}>
                Game Status
              </h2>
              <p
                className={[
                  styles.statusText,
                  winner ? styles.statusWin : "",
                  draw ? styles.statusDraw : "",
                ].join(" ")}
                aria-live="polite"
              >
                {statusText}
              </p>
            </div>

            <button
              type="button"
              className={styles.resetButton}
              onClick={handleReset}
              aria-label="Start a new game"
            >
              New Game
            </button>
          </div>

          <Board
            squares={squares}
            onSquareClick={handleSquareClick}
            disabled={Boolean(winner || draw)}
            winningPlayer={winner}
          />

          <footer className={styles.footer}>
            <p className={styles.hint}>
              Tip: Click an empty square to place your mark. You can’t overwrite
              a move.
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}
