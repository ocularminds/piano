import React from 'react';
import './Keyboard.css';

class KeyboardList extends React.Component {
  render() {
    return (
      <div className="piano">
        {this.props.keyPads &&
          this.props.keyPads.map((pad, index) => {
            const zIndex = index + 1;
            const top = index === 0 ? 0 : -200;
            const left = Math.ceil(index * 52.5);
            const stylePads = {
              marginLeft: `${left}px`,
              zIndex: `${zIndex}`,
              marginTop: `${top}px`,
            };
            return (
              <div className="white" style={stylePads} key={index}>
                <div className="key">{pad}</div>
              </div>
            );
          })}
        {this.props.keyPads &&
          this.props.keyPads.map((pad, index) => {
            const zIndex = index + 1 + this.props.keyPads.length;
            const top = index === 0 ? -200 : -150;
            const left = Math.ceil(index * 52.5) + 26;
            const label = pad + '#';
            const semitone = pad === 'E' || pad === 'B';
            const stylePads = {
              marginLeft: `${left}px`,
              zIndex: `${zIndex}`,
              marginTop: `${top}px`,
            };
            return semitone ? (
              <></>
            ) : (
              <div className="black" style={stylePads} key={index}>
                <div>{label}</div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default KeyboardList;
