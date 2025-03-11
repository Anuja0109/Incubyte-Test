import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import StringCalculator from ".";
import addNumbersOnly from "../../utils/addNumbersOnly";

describe("StringCalculator component", () => {
  it("For rendering String Calculator Component without crashing", () => {
    render(<StringCalculator />);
    expect(screen.getByText("String Calculator")).toBeInTheDocument();
  });

  it("For checking if click event is working on Add button", () => {
    render(<StringCalculator />);
    const button = screen.getByTestId("add-button");
    const logSpy = jest.spyOn(console, "log");
    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(logSpy).toHaveBeenCalledTimes(1);
  });

  it("For checking if addNumbersOnly function is working with empty string", () => {
    const sum = addNumbersOnly("");
    expect(sum).toBe(0);
  })
});
