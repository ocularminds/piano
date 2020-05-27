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
            return <KeyPad clazz="WHITE" id={index} pad={pad} key={index} />;
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
                key={index * 2}
                size={keys.length}
              />
            );
          })}
      </div>
    );
  }
}

export default Keyboard;
