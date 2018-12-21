import React from 'react';
import { connect } from 'react-redux';

class FormAddItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      attributes: [],
      description: '',
      attribute: '',
    };
  }

  onTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  onAttributeChange(e) {
    this.setState({ attribute: e.target.value });
  }

  onAttributeKeyPress(e) {
    if (e.charCode  === 13) {
      this.addAttribute();
    }
  }

  addAttribute() {
    if (!this.state.attribute) {
      return;
    }
    const { attributes } = this.state;
    attributes.push(this.state.attribute);
    this.setState({
      attributes,
      attribute: '',
    });
  }

  removeAttribute(index) {
    const { attributes } = this.state;
    attributes.splice(index, 1);
    this.setState({
      attributes,
    });
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  submit() {
    const { title, attributes, description } = this.state;
    if (!title) {
      return;
    }
    this.props.dispatch({
      type: 'ADD_TO_END',
      item: {
        title,
        attributes,
        description,
      },
    });
    this.setState({
      title: '',
      attributes: [],
      description: '',
    });
  }

  render() {
    const {
      title,
      attributes,
      description,
      attribute,
    } = this.state;

    const attributeItems = attributes.map((attr, i) => (
      <div key={i} className="chip">
        {attr}
          <i
            className="close material-icons"
            onClick={this.removeAttribute.bind(this, i)}
          >close</i>
      </div>
    ));

    return (
      <div className="card">
        <div className="card__content">
          <h2 className="mt-0">Добавить новый объект</h2>
          <form>
            <div className="input-field">
              <label htmlFor="title">Заголовок *</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={this.onTitleChange.bind(this)}
              />
            </div>
            {attributeItems}
            <div className="input-field">
              <label htmlFor="attribute">Добавить пункт</label>
              <input
                id="attribute"
                type="text"
                value={attribute}
                onChange={this.onAttributeChange.bind(this)}
                onBlur={this.addAttribute.bind(this)}
                onKeyPress={this.onAttributeKeyPress.bind(this)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="description">Описание</label>
              <input
                id="description"
                type="text"
                value={description}
                onChange={this.onDescriptionChange.bind(this)}
              />
            </div>
            <button
              type="button"
              className="btn"
              onClick={this.submit.bind(this)}
            >Добавить</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(FormAddItem);
