import React from 'react';
import './Keyboard.css';

class KeyPad extends React.Component {
  constructor(props) {
    super(props);
    this.createPad = this.createPad.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target.getAttribute('label') && this.props.clazz === 'WHITE') {
      const style = e.target.style;
      style.setProperty('background-color', '#737373');
      this.props.onSave(e.target.getAttribute('label'));
      setTimeout(() => style.setProperty('background-color', '#fff'), 1000);
    }
  }

  createPad() {
    const pad = this.props.pad;
    let zIndex = parseInt(this.props.id) + 1;
    let top = parseInt(this.props.id) === 0 ? 0 : -250;
    let left = Math.ceil(parseInt(this.props.id) * 80);
    if (this.props.clazz === 'BLACK') {
      zIndex = parseInt(this.props.id) + 1 + parseInt(this.props.size);
      top = parseInt(this.props.id) === 0 ? -250 : -150;
      left = Math.ceil(parseInt(this.props.id) * 80) + 37.5;
    }
    const semitone = pad === 'E' || pad === 'B';
    const label = this.props.clazz === 'WHITE' ? pad : pad + '#';
    const stylePads = {
      marginLeft: `${left}px`,
      zIndex: `${zIndex}`,
      marginTop: `${top}px`,
    };
    return {stylePads, semitone, label};
  }
  render() {
    const key = this.createPad();
    return (
      <div
        className={this.props.clazz.toLowerCase()}
        style={key.stylePads}
        label={key.label}
        key={this.props.keyid}
        onClick={(e) => this.handleClick(e)}
      >
        <div className="key">{key.label}</div>
      </div>
    );
  }
}
KeyPad.displayName = 'KeyPad';
export default KeyPad;
