import React from 'react';
import { connect } from 'react-redux';

function Actions({ dispatch = () => {} }) {
  const btnClass = 'waves-effect waves-light btn-small';
  const btnStyle = { width: '100%' };

  return (
    <div className="row">
      <div className="col m6 s12">
        <button
          className={btnClass}
          style={btnStyle}
          onClick={() => dispatch({ type: 'ADD_TO_TOP' })}
        >Добавить в начало</button>
      </div>
      <div className="col m6 s12">
        <button
          className={btnClass}
          style={btnStyle}
          onClick={() => dispatch({ type: 'ADD_TO_END' })}
        >Добавить в конец</button>
      </div>
      <div className="col m6 s12">
        <button
          className={btnClass}
          style={btnStyle}
          onClick={() => dispatch({ type: 'DELETE_FIRST' })}
        >Удалить первый</button>
      </div>
      <div className="col m6 s12">
        <button
          className={btnClass}
          style={btnStyle}
          onClick={() => dispatch({ type: 'DELETE_LAST' })}
        >Удалить последний</button>
      </div>
    </div>
  );
}

export default connect()(Actions);
