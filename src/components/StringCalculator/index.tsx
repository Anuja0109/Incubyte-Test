import React, { useState } from "react";
import addNumbersOnly from "../../utils/addNumbersOnly";

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [totalSum, setTotalSum] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log({ e });
    const sum = addNumbersOnly(input);
    setTotalSum(sum);
    e.preventDefault();
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
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="button" data-testid="add-button" onClick={handleClick}>
            Add
          </button>
          <p className="dispaly-sum" data-testid="display-sum">
            {totalSum}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StringCalculator;
