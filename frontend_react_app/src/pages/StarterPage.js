import React from "react";
import styles from "./StarterPage.module.css";

/**
 * Starter landing page shown at the root route.
 */
// PUBLIC_INTERFACE
export default function StarterPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="starter-title">
        <h1 id="starter-title" className={styles.title}>
          Tic Tac Toe – Project Setup Complete
        </h1>
        <p className={styles.subtitle}>We're up and running!</p>

        <button
          type="button"
          className={styles.primaryButton}
          onClick={() => {
            // Non-functional for now (placeholder for future navigation/game start).
          }}
        >
          Start Game
        </button>
      </section>
    </main>
  );
}
