import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ value, clickHandler }) {
  return (
    <button
      type="button"
      onClick={() => clickHandler(value)}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
