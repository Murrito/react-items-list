import React from 'react';

import Actions from './Actions';
import Toggle from './Toggle';
import List from './List';

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
        <h2>Ekaterina Gudova</h2>

        <Actions/>
        <div className="divider"/>
        <div className="row align-center">
          <div className="col m8">
            <h5 className="mt-0 mb-0">Список объектов</h5>
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
      </div>
    );
  }
}

export default Index;
