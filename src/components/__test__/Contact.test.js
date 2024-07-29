import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
    //render
  render(<Contact />);

  //quary
  const heading = screen.getByRole("heading");
  //assertion
  expect(heading).toBeInTheDocument();
});
 5