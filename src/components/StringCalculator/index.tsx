import React, { useState } from "react";
import addNumbersOnly from "../../utils/addNumbersOnly.ts";
import getCallCount from "../../utils/getCallCount.ts";

/**
 * This component renders a string calculator with total sum, total call count & validation error.
 * @returns {React.FC} A React functional component.
 */
const StringCalculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [totalSum, setTotalSum] = useState(0);
  const [err, setErr] = useState("");
  const [addCalled, setAddCalled] = useState(0);

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    console.log({ ev });
    if (input) {
      setAddCalled(getCallCount(addCalled));
      try {
        const sum = addNumbersOnly(input);
        setTotalSum(sum);
        setErr("");
      } catch (e) {
        if (e instanceof Error) {
          setTotalSum(0);
          setErr(e.message);
        }
      }
    } else ev.preventDefault();
  };

  return (
    <div className="sc-container">
      <h2 className="heading">String Calculator</h2>
      <div className="calculator-sec">
        <div className="input-sec">
          <input
            type="text"
            name="stringCal"
            value={input}
            placeholder="Enter here..."
            data-testid="str-input"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="button" data-testid="add-button" onClick={handleClick}>
            Add
          </button>
        </div>
          <span data-testid="validation-err" className="validation-err">
          {err}
        </span>
        <p className="dispaly-sum" data-testid="display-sum">
          Sum: {totalSum}
        </p>
        <p className="dispaly-add-count" data-testid="dispaly-add-count">
          Add button call count: {addCalled}
        </p>
      </div>
    </div>
  );
};

export default StringCalculator;
