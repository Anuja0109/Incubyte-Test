import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import StringCalculator from ".";
import addNumbersOnly from "../../utils/addNumbersOnly";
import getCallCount from "../../utils/getCallCount";

describe("StringCalculator component", () => {
  it("For rendering String Calculator Component without crashing", () => {
    // Render component without props
    render(<StringCalculator />);
    // Get main text of the component & assert the main heading in the document
    expect(screen.getByText("String Calculator")).toBeInTheDocument();
  });

  it("For checking if click event is working on Add button", () => {
    render(<StringCalculator />);
    const button = screen.getByTestId("add-button");
    // check if any Console is there
    const logSpy = jest.spyOn(console, "log");
    expect(button).toBeTruthy();
    fireEvent.click(button);
    // Check if the console is appearing & only 1 time
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
    // Getting input context
    const numStringInput = screen.getByTestId("str-input");
    // Setting value in input
    fireEvent.input(numStringInput, { target: { value: "2/n-3;4" } });

    const btn = screen.getByTestId("add-button");
    fireEvent.click(btn);
    // Check if Error message is showing in document
    await waitFor(() => {
      expect(screen.getByText("negatives not allowed: -3"));
    });
  });

  it("For checking addNumbersOnly function is throwing error for multiple negatives in input", () => {
    const sum = () => addNumbersOnly("2/n-3;4,,,-5;8");
    expect(sum).toThrow("negatives not allowed: -3,-5");
  });

  it("For checking is getCalledCount function is working correctly", () => {
    const count = getCallCount(3);
    expect(count).toBe(4);
  });
  it("For checking if number greater than thousand are ignored by addNumberOnly func", () => {
    const sum = addNumbersOnly("2;1001");
    expect(sum).toBe(2);
  });
  it("For checking addNumbersOnly function is working with different delimiters varying delimiters lengths", () => {
    const sum = addNumbersOnly("//[*][%]\n1*2%3");
    expect(sum).toBe(6);
  });
});
