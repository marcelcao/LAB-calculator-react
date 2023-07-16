import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ value, onClick, color }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {value}
    </button>
  );
}

Button.propTypes = PropTypes.shape({
  value: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
}).isRequired;
