import React from 'react';
import './Keyboard.css';
import KeyPad from './KeyPad';

class Keyboard extends React.Component {
  createKey(pad, index, clazz = 'WHITE') {
    let keyid = index + clazz + this.props.id;
    if (clazz === 'BLACK') {
      if (pad === 'E' || pad === 'B') return <></>;
    }
    console.log(clazz, pad, keyid);
    return (
      <KeyPad
        clazz={clazz}
        id={index}
        pad={pad}
        key={keyid}
        onSave={this.props.onSave}
      />
    );
  }
  render() {
    const keys = this.props.keyPads;
    return (
      <div className="piano">
        {keys && keys.map((pad, index) => this.createKey(pad, index))}
        {keys && keys.map((pad, index) => this.createKey(pad, index, 'BLACK'))}
      </div>
    );
  }
}

export default Keyboard;
