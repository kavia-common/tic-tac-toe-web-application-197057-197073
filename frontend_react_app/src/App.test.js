import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders tic tac toe game", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /tic tac toe/i })).toBeInTheDocument();
  expect(screen.getByText(/game status/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /new game/i })).toBeInTheDocument();
});
