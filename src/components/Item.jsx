import React from 'react';
import PropTypes from 'prop-types'

class Item extends React.Component {
  renderDescription() {
    const { description } = this.props.item;

    if (!description) {
      return null;
    }

    return (
      <div className="col s12">
        <div className="divider mt-0"/>
        {description}
      </div>
    );
  }

  renderAsLine() {
    const { item, number } = this.props;

    return (
      <div className="row">
        <div className="col s1 teal-text">{number}</div>
        <div className="col s3">{item.title}</div>
        <div className="col s8">
          <div className="row">
            {item.attributes && item.attributes.length
              ? item.attributes.map((attribute, i) => {
                return (
                  <div
                    key={i}
                    className="col s4"
                  >{attribute}</div>
                );
              })
              : ''
            }
          </div>
        </div>
        {this.renderDescription()}
      </div>
    );
  }

  renderAsCard() {
    const { item, number } = this.props;

    return (
      <div className="row">
        <div className="col s11">{item.title}</div>
        <div className="col s1 teal-text right-align">{number}</div>
        <div className="col s12">
          <div className="divider mt-0"/>
          <div className="row">
            {item.attributes && item.attributes.length
              ? item.attributes.map((attribute, i) => {
                return (
                  <div
                    key={i}
                    className="col s11 offset-s1"
                  >{attribute}</div>
                );
              })
              : ''
            }
          </div>
        </div>
        {this.renderDescription()}
      </div>
    );
  }

  render() {
    const { isList } = this.props;

    return (
      <div
        className="card grey lighten-4"
        style={{height: '100%', margin: 0}}
      >
        <div className="card-content">
          {isList ? this.renderAsLine() : this.renderAsCard()}
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  isList: PropTypes.bool,
  item: PropTypes.object,
  number: PropTypes.number,
};

export default Item;
