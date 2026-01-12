import React from "react";
import styles from "./Square.module.css";

/**
 * Single square button.
 * @param {Object} props
 * @param {"X"|"O"|null} props.value - value to display
 * @param {number} props.index - board index (0..8)
 * @param {(index:number)=>void} props.onClick - click handler
 * @param {boolean} props.disabled - disables all squares when game ends
 */
// PUBLIC_INTERFACE
export default function Square({ value, index, onClick, disabled }) {
  const isFilled = Boolean(value);

  return (
    <button
      type="button"
      className={styles.square}
      role="gridcell"
      aria-label={`Square ${index + 1}${value ? `, ${value}` : ""}`}
      data-value={value || "empty"}
      disabled={disabled || isFilled}
      onClick={() => onClick(index)}
    >
      <span className={styles.value} aria-hidden="true">
        {value}
      </span>
    </button>
  );
}
