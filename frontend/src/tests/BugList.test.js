import { render, screen } from "@testing-library/react";
import BugList from "../components/BugList";

test("renders bug list", () => {
  render(<BugList />);
  expect(screen.getByText(/Bug Tracker/i)).toBeInTheDocument();
});