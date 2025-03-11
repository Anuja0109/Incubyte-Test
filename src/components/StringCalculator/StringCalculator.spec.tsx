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
  });

  it("For checking if addNumbersOnly function is working with valid string", () => {
    const sum = addNumbersOnly("2,3");
    expect(sum).toBe(5);
  });

  it("For checking addNumbersOnly function is working with valid input having different delimeters", () => {
    const sum = addNumbersOnly("2;3");
    expect(sum).toBe(5);
  });

  it("For checking addNumbersOnly function is working with valid input having negative numbers", () => {
    const sum = addNumbersOnly("2/n-3;4");
    expect(sum).toBe(0);
  });
  it("For checking addNumbersOnly function is throwing error for negatives in input", () => {
    const sum = () => addNumbersOnly("2/n-3;4");
    expect(sum).toThrow("negatives not allowed: -3");
  })
});
