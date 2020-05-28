import React from 'react';
import './Keyboard.css';
import KeyPad from './KeyPad';

class Keyboard extends React.Component {
  createKey(pad, index, clazz = 'WHITE') {
    let keyid = index + clazz + this.props.id;
    if (clazz === 'BLACK') {
      if (pad === 'E' || pad === 'B') return (<div key={keyid}></div>);
    }
    return (
      <KeyPad
        clazz={clazz}
        id={index}
        pad={pad}
        key={keyid}
        keyid={keyid}
        onSave={this.props.onSave}
      />
    );
  }
  render() {
    const keys = this.props.keyPads;
    return (
      <div className="piano" key={this.props.id}>
        {keys && keys.map((pad, index) => this.createKey(pad, index))}
        {keys && keys.map((pad, index) => this.createKey(pad, index, 'BLACK'))}
      </div>
    );
  }
}
Keyboard.displayName = 'Keyboard'
export default Keyboard;
