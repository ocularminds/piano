import React from 'react';
import './Controls.css';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {notes: '', error: '', logs: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const E = e.target.value.toUpperCase();
    if (E.length === 0) return;
    const NOTES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', ','];
    if (NOTES.some((e) => e === E[E.length - 1])) {
      this.setState({notes: E});
    }
  }

  handlePlay(e, ref) {
    e.preventDefault();
    this.props.onPlay(this.state.notes, ref);
  }

  render() {
    return (
      <div className="controls">
        <div width="100%">{this.props.logs}</div>
        <div className="controls-input">
          <input
            className="text-input"
            defaultValue={this.state.notes}
            onChange={(e) => this.handleChange(e)}
          />
          <button
            className="controls-button"
            onClick={(e) => this.handlePlay(e, this.props.container.current)}
          >
            Play
          </button>
        </div>
      </div>
    );
  }
}
export default Controls;
