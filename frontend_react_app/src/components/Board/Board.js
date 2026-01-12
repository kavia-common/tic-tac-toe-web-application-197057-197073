import React from "react";
import Square from "../Square/Square";
import styles from "./Board.module.css";

/**
 * Game board component (3x3 grid).
 * @param {Object} props
 * @param {Array<"X"|"O"|null>} props.squares - board state (length 9)
 * @param {(index:number)=>void} props.onSquareClick - click handler for a square
 * @param {boolean} props.disabled - disables interaction when game finished
 * @param {"X"|"O"|null} props.winningPlayer - winner if exists, else null
 */
// PUBLIC_INTERFACE
export default function Board({ squares, onSquareClick, disabled, winningPlayer }) {
  return (
    <div className={styles.boardWrap}>
      <div
        className={styles.board}
        role="grid"
        aria-label="Tic Tac Toe board"
        aria-disabled={disabled ? "true" : "false"}
        data-winner={winningPlayer || "none"}
      >
        {squares.map((value, idx) => (
          <Square
            // eslint-disable-next-line react/no-array-index-key
            key={idx}
            value={value}
            index={idx}
            onClick={onSquareClick}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}
