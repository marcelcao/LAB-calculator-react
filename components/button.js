import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ value, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

Button.propTypes = PropTypes.shape({
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}).isRequired;
