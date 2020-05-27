import React from 'react';
import './Keyboard.css';
import KeyPad from './KeyPad';

class Keyboard extends React.Component {
  render() {
    const keys = this.props.keyPads;
    return (
      <div className="piano">
        {keys &&
          keys.map((pad, index) => {
            return (
              <KeyPad
                clazz="WHITE"
                id={index}
                pad={pad}
                key={index}
                onSave={this.props.onSave}
              />
            );
          })}
        {keys &&
          keys.map((pad, index) => {
            const semitone = pad === 'E' || pad === 'B';
            return semitone ? (
              <></>
            ) : (
              <KeyPad
                clazz="BLACK"
                id={index}
                pad={pad}
                key={index + Math.ceil(Math.random() * 98765432)}
                size={keys.length}
                onSave={this.props.onSave}
              />
            );
          })}
      </div>
    );
  }
}

export default Keyboard;
