import React, { useState } from "react";
import addNumbersOnly from "../../utils/addNumbersOnly";
import getCallCount from "../../utils/getCallCount";

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
          setErr(e.message);
        }
      }
    } else ev.preventDefault();
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
