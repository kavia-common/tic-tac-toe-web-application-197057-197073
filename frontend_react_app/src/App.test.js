import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders starter landing page", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /tic tac toe – project setup complete/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/we're up and running!/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /start game/i })).toBeInTheDocument();
});
