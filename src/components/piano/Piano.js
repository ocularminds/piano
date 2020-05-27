import React from 'react';
import ReactDOM from 'react-dom';
import './Piano.css';
import Controls from '../controls/Controls';
import Keyboard from '../keyboard/Keyboard';

class Piano extends React.Component {
  NOTES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  constructor(props) {
    super(props);
    this.state = {nodes: {}, logs: 'LOGS: '};
    this.play = this.play.bind(this);
    this.save = this.save.bind(this);
  }
  componentDidMount() {
    let htmlNodes = {};
    const domNode = ReactDOM.findDOMNode(this);
    let nodes = domNode.querySelectorAll('.white');
    nodes.forEach((node) => {
      if (this.NOTES.some((n) => n === node.getAttribute('label'))) {
        htmlNodes[node.getAttribute('label')] = node;
      }
    });
    this.setState({nodes: htmlNodes});
  }

  save(data) {
    data = this.state.logs + ',' + data;
    this.setState({logs: data});
  }

  play(keys) {
    if (keys === undefined) return;
    const {nodes} = this.state;
    var count = 0;
    keys.split(',').forEach((key) => {
      if (this.NOTES.some((n) => n === key)) {
        setTimeout(() => {
          nodes[key].style.setProperty('background-color', '#737373');
          setTimeout(
            () => nodes[key].style.setProperty('background-color', '#ffffff'),
            1000
          );
        }, 1000 * count);
        count += 1;
      }
    });
  }

  render() {
    return (
      <div className="main">
        <h2>{this.props.model.name}</h2>
        <Keyboard keyPads={this.props.model.keyPads} onSave={this.save} />
        <Controls onPlay={this.play} logs={this.state.logs} />
      </div>
    );
  }
}

export default Piano;
