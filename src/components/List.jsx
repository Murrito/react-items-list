import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';

function List({ items, isList }) {
  return (
    <div className="items">
      <div className="row">
        {items.length > 0
          ? items.map((item, i) => {
            return (
              <div
                key={i}
                className={`col s12 ${isList ? '' : 'm6 l4'}`}
              >
                <Item
                  number={i + 1}
                  item={item}
                  isList={isList}
                />
              </div>
            );
          })
          : <div className="col s12 center-align">Не найдено ни одного объекта</div>
        }
      </div>
    </div>
  );
}

function mapState(state) {
  const { items } = state;

  return items;
}

export default connect(mapState)(List);
