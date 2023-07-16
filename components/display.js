import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ value }) {
  return (
    <input value={value} readOnly className="display-result" />
  );
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};
