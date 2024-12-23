import React, { useState } from 'react';
import './App.css'; // Import CSS for styling

// Calculator Component
const Calculator = () => {
  const [input, setInput] = useState(''); // State to manage user input

  // Function to handle button click
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Function to clear the input
  const clearInput = () => {
    setInput('');
  };

  // Function to delete the last character
  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  // Function to calculate the result
  const calculateResult = () => {
    try {
      // Evaluate the mathematical expression
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Function to handle square root operation
  const handleSquareRoot = () => {
    try {
      setInput(Math.sqrt(eval(input)).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Function to handle square operation
  const handleSquare = () => {
    try {
      setInput(Math.pow(eval(input), 2).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Function to handle exponentiation (x^y)
  const handleExponentiation = () => {
    setInput((prev) => prev + '**'); // Add exponentiation operator
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{input || '0'}</div>
        <div className="buttons">
          {/* Row 1 */}
          <button onClick={() => handleClick('1')} className="button-number">1</button>
          <button onClick={() => handleClick('2')} className="button-number">2</button>
          <button onClick={() => handleClick('3')} className="button-number">3</button>
          <button onClick={() => handleClick('+')} className="button-operator">+</button>

          {/* Row 2 */}
          <button onClick={() => handleClick('4')} className="button-number">4</button>
          <button onClick={() => handleClick('5')} className="button-number">5</button>
          <button onClick={() => handleClick('6')} className="button-number">6</button>
          <button onClick={() => handleClick('-')} className="button-operator">-</button>

          {/* Row 3 */}
          <button onClick={() => handleClick('7')} className="button-number">7</button>
          <button onClick={() => handleClick('8')} className="button-number">8</button>
          <button onClick={() => handleClick('9')} className="button-number">9</button>
          <button onClick={() => handleClick('*')} className="button-operator">*</button>

          {/* Row 4 */}
          <button onClick={() => handleClick('.')} className="button-operator">.</button>
          <button onClick={() => handleClick('0')} className="button-number">0</button>
          <button onClick={handleSquareRoot} className="button-operator">√</button>
          <button onClick={() => handleClick('/')} className="button-operator">/</button>

          {/* Row 5 - New math operations */}
          <button onClick={handleSquare} className="button-operator">x²</button>
          <button onClick={deleteLast} className="button-delete">DEL</button>
          <button onClick={clearInput} className="button-clear">C</button>
          <button onClick={calculateResult} className="button-equal">=</button>

        </div>
      </div>
    </div>
  );
};

export default Calculator;
