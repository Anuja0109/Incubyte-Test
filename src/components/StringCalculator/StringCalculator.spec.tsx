import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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

  it("For checking addNumbersOnly function is throwing error for negatives in input", () => {
    const sum = () => addNumbersOnly("2/n-3;4");
    expect(sum).toThrow("negatives not allowed: -3");
  });

  it("For checking if error thrown is rendering on screen without breaking it", async () => {
    render(<StringCalculator />);

    const numStringInput = screen.getByTestId("str-input");

    fireEvent.input(numStringInput, { target: { value: "2/n-3;4" } });

    const btn = screen.getByTestId("add-button");
    fireEvent.click(btn);

    await waitFor(() => {
      expect(screen.getByText("negatives not allowed: -3"));
    });
  });
});
