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
    <>
      <Display value={result} />
      <div className="btn-panel">
        <div className="btn-grp">
          <Button value="C" onClick={handleClear} />
          <Button value="←" onClick={handleBack} />
          <Button value="/" onClick={() => handleClick('/')} />
        </div>
        <div className="btn-grp">
          <Button value="7" onClick={() => handleClick('7')} />
          <Button value="8" onClick={() => handleClick('8')} />
          <Button value="9" onClick={() => handleClick('9')} />
          <Button value="*" onClick={() => handleClick('*')} />
        </div>
        <div className="btn-grp">
          <Button value="4" onClick={() => handleClick('4')} />
          <Button value="5" onClick={() => handleClick('5')} />
          <Button value="6" onClick={() => handleClick('6')} />
          <Button value="-" onClick={() => handleClick('-')} />
        </div>
        <div className="btn-grp">
          <Button value="1" onClick={() => handleClick('1')} />
          <Button value="2" onClick={() => handleClick('2')} />
          <Button value="3" onClick={() => handleClick('3')} />
          <Button value="+" onClick={() => handleClick('+')} />
        </div>
        <div className="btn-grp">
          <Button value="0" onClick={() => handleClick('0')} />
          <Button value="=" onClick={handleOps} />
        </div>
      </div>
    </>
  );
}
