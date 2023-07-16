import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Button from './button';
import Display from './display';

export default function Panel() {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setResult((prevResult) => (prevResult === '0' ? value : prevResult + value));
  };

  const handleClear = () => {
    setResult('0');
  };

  const handleOps = () => {
    try {
      const calcResult = evaluate(result);
      setResult(calcResult.toString());
    } catch (err) {
      setResult('Error');
    }
  };

  const handleBack = () => {
    setResult((prevResult) => (prevResult.slice(0, -1)));
  };

  return (
    <table>
      <tr>
        <td colSpan="4" className="display-cell">
          <Display value={result} />
        </td>
      </tr>

      <tr>
        <td colSpan="2" className="reg-btn">
          <Button value="C" onClick={handleClear} />
        </td>
        <td className="ops-btn">
          <Button value="←" onClick={handleBack} color="#df974c" />
        </td>
        <td className="ops-btn">
          <Button value="/" onClick={() => handleClick('/')} color="#df974c" />
        </td>
      </tr>

      <tr>
        <td className="reg-btn">
          <Button value="7" onClick={() => handleClick('7')} />
        </td>
        <td className="reg-btn">
          <Button value="8" onClick={() => handleClick('8')} />
        </td>
        <td className="reg-btn">
          <Button value="9" onClick={() => handleClick('9')} />
        </td>
        <td className="ops-btn">
          <Button value="*" onClick={() => handleClick('*')} color="#df974c" />
        </td>
      </tr>

      <tr>
        <td className="reg-btn">
          <Button value="4" onClick={() => handleClick('4')} />
        </td>
        <td className="reg-btn">
          <Button value="5" onClick={() => handleClick('5')} />
        </td>
        <td className="reg-btn">
          <Button value="6" onClick={() => handleClick('6')} />
        </td>
        <td className="ops-btn">
          <Button value="-" onClick={() => handleClick('-')} color="#df974c" />
        </td>
      </tr>

      <tr>
        <td className="reg-btn">
          <Button value="1" onClick={() => handleClick('1')} />
        </td>
        <td className="reg-btn">
          <Button value="2" onClick={() => handleClick('2')} />
        </td>
        <td className="reg-btn">
          <Button value="3" onClick={() => handleClick('3')} />
        </td>
        <td className="ops-btn">
          <Button value="+" onClick={() => handleClick('+')} color="#df974c" />
        </td>
      </tr>

      <tr>
        <td colSpan="3" className="reg-btn">
          <Button value="0" onClick={() => handleClick('0')} />
        </td>
        <td className="ops-btn">
          <Button value="=" onClick={handleOps} color="#df974c" />
        </td>
      </tr>

    </table>
  );
}
