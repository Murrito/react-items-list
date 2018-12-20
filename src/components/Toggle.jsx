import React from 'react';
import PropTypes from 'prop-types';

function Toggle ({ isList, onToggle }) {
  return (
    <div className="right-align">
      <button
        className={`waves-effect waves-teal btn ${isList ? '' : 'btn-flat'}`}
        onClick={() => onToggle(true)}
      >
        <i className="material-icons">list</i>
      </button>
      &nbsp;
      <button
        className={`waves-effect waves-teal btn ${isList ? 'btn-flat' : ''}`}
        onClick={() => onToggle(false)}
      >
        <i className="material-icons">grid_on</i>
      </button>
    </div>
  );
}

Toggle.propTypes = {
  isList: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default Toggle;