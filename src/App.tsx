import { asFizzBuzz } from "./utils/greet";
import { useState } from "react";

function App(): JSX.Element {
  const [currentValues, rerenderWithNewValue] = useState<(number | string)[]>([
    1,
  ]);

  const handleNextNumber = () => {
    const newValue = asFizzBuzz(currentValues.length + 1);
    rerenderWithNewValue([...currentValues, newValue]);
  };

  return (
    <>
      <h1> FizzBuzz App </h1>
      <button onClick={handleNextNumber}> Next </button>
      <ul>
        {
          // currentValue.join(", ")
          currentValues.map((element, idx) => (
            <li key={idx}>{element}</li>
          ))
        }
      </ul>
    </>
  );
}

export default App;
