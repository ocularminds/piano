import React from 'react';
import './Controls.css';

class Controls extends React.Component {
  render() {
    return (
      <div className="controls">
        <div className="controls-input">
          <input value="" className="text-input" />
          <button className="controls-button">Play</button>
        </div>
      </div>
    );
  }
}
export default Controls;
