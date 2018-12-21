import React from 'react';
import { connect } from 'react-redux';

function Actions({ dispatch = () => {} }) {
  const btnClass = 'btn btn--block';

  return (
    <div className="row">
      <div className="col m6 s12">
        <button
          className={btnClass}
          onClick={() => dispatch({ type: 'ADD_TO_TOP' })}
        >Добавить в начало</button>
      </div>
      <div className="col m6 s12">
        <button
          className={btnClass}
          onClick={() => dispatch({ type: 'ADD_TO_END' })}
        >Добавить в конец</button>
      </div>
      <div className="col m6 s12">
        <button
          className={btnClass}
          onClick={() => dispatch({ type: 'DELETE_FIRST' })}
        >Удалить первый</button>
      </div>
      <div className="col m6 s12">
        <button
          className={btnClass}
          onClick={() => dispatch({ type: 'DELETE_LAST' })}
        >Удалить последний</button>
      </div>
    </div>
  );
}

export default connect()(Actions);
