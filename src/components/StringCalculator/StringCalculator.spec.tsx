import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StringCalculator from ".";

describe("StringCalculator component", () => {
  it("For rendering String Calculator Component without crashing", () => {
    render(<StringCalculator />);
  });
});
