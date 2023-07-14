import React, { useState } from 'react';
import Button from './button';
import Display from './display';

export default function Panel() {
  const [result, setResult] = useState('');

  // const operations = ['/', '*', '+', '-'];

  const updateCalc = (value) => {
    setResult(result + value);
  };

  return (
    <>
      <Display />
      <div className="btn-panel">
        <div className="btn-grp">
          <Button value="C" />
          <Button value="←" />
          <Button value="/" onclick={() => updateCalc('/')} />
        </div>
        <div className="btn-grp">
          <Button value="7" onclick={() => updateCalc('7')} />
          <Button value="8" onclick={() => updateCalc('8')} />
          <Button value="9" onclick={() => updateCalc('9')} />
          <Button value="*" onclick={() => updateCalc('*')} />
        </div>
        <div className="btn-grp">
          <Button value="4" onclick={() => updateCalc('4')} />
          <Button value="5" onclick={() => updateCalc('5')} />
          <Button value="6" onclick={() => updateCalc('6')} />
          <Button value="-" onclick={() => updateCalc('-')} />
        </div>
        <div className="btn-grp">
          <Button value="1" onclick={() => updateCalc('1')} />
          <Button value="2" onclick={() => updateCalc('2')} />
          <Button value="3" onclick={() => updateCalc('3')} />
          <Button value="+" onclick={() => updateCalc('+')} />
        </div>
        <div className="btn-grp">
          <Button value="0" onclick={() => updateCalc('0')} />
          <Button value="=" />
        </div>
      </div>
    </>
  );
}
