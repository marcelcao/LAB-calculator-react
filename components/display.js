import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result }) {
  return (
    <>
      <div className="calc-display">
        <h1 className="display-result">{result}</h1>
      </div>
    </>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: '0',
};
