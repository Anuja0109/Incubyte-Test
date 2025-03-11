import React, { useState } from "react";
import addNumbersOnly from "../../utils/addNumbersOnly";

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [totalSum, setTotalSum] = useState(0);
  const [err, setErr] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log({ e });
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
  };
  return (
    <div className="sc-container">
      <h2 className="heading">String Calculator</h2>
      <div className="calculator-sec">
        <div>
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
          <p className="dispaly-sum" data-testid="display-sum">
            {totalSum}
          </p>
          {err && <p data-testid="validation-err">{err}</p>}
        </div>
      </div>
    </div>
  );
};

export default StringCalculator;
