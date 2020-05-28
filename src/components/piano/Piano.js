import React from 'react';
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
    this.piano = React.createRef();
    this.mountNodes = this.mountNodes.bind(this);
  }
  mountNodes(main) {
    let htmlNodes = {};
    if (main === undefined) return htmlNodes;
    
    const nodes = main.querySelectorAll('.white');
    nodes.forEach((node) => {
      if (this.NOTES.some((n) => n === node.getAttribute('label'))) {
        htmlNodes[node.getAttribute('label')] = node;
      }
    });
    return htmlNodes;
  }

  save(data) {
    data = this.state.logs + ',' + data;
    this.setState({logs: data});
  }

  play(keys, container) {
    if (keys === undefined || keys === null || keys.length === 0) return;
    const nodes = this.mountNodes(container);
    var count = 0;
    const highlight = (S) => S.setProperty('background-color', '#737373');
    const normalize = (S) => S.setProperty('background-color', '#ffffff');
    keys.split(',').forEach((key) => {
      if (this.NOTES.some((n) => n === key)) {
        if (nodes[key] === undefined) return;
        setTimeout(() => {
          highlight(nodes[key].style);
          setTimeout(() => normalize(nodes[key].style), 1000);
        }, 1000 * count);
        count += 1;
      }
    });
  }

  render() {
    return (
      <div className="main" ref={this.piano} key={this.props.id}>
        <h2>{this.props.model.name}</h2>
        <Keyboard
          keyPads={this.props.model.keyPads}
          onSave={this.save}
          id={this.props.id}
        />
        <Controls onPlay={this.play} logs={this.state.logs} container={this.piano}/>
      </div>
    );
  }
}

Piano.displayName='Piano';
export default Piano;
