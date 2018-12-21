import React from 'react';

import Actions from './Actions';
import Toggle from './Toggle';
import List from './List';
import FormAddItem from './FormAddItem';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isList: true,
    };
  }

  onToggle(isList) {
    this.setState({
      isList,
    });
  }

  render() {
    return (
      <div className="container app">
        <h1>Ekaterina Gudova</h1>

        <Actions/>
        <div className="divider"/>
        <div className="row align-center">
          <div className="col m8">
            <h2 className="mt-0 mb-0">Список объектов</h2>
          </div>
          <div className="col m4">
            <Toggle
              isList={this.state.isList}
              onToggle={(e) => this.onToggle(e)}
            />
          </div>
        </div>
        <div className="divider"/>
        <List isList={this.state.isList}/>
        <div className="divider"/>
        <FormAddItem/>
      </div>
    );
  }
}

export default Index;
