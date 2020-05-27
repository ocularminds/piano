import React from 'react';
import './Piano.css';
import Controls from '../controls/Controls';
import KeyboardList from '../keyboard/KeyboardList';

class Piano extends React.Component {
  render() {
    return (
      <div className="main">
          <h2>{this.props.model.name}</h2>
        <KeyboardList keyPads={this.props.model.keyPads}/>
        <Controls />
      </div>
    );
  }
}

export default Piano;
