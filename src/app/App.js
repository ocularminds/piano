import React from 'react';
import './App.css';
import PianoList from '../components/piano/PianoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pianos: [
        {name: 'Casino', keyPads: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']},
        {name: 'Yamaha', keyPads: ['E', 'F', 'G', 'A', 'B', 'C', 'D', 'E']},
        {name: 'Korg', keyPads: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A']},
      ],
      keyPads: [],
      classNames: [],
    };
  }

  onKeyboardClick(key) {}

  play(keys) {}

  render() {
    return (
      <>
        <h1>-- My Piano --</h1>
        <PianoList pianos={this.state.pianos} />
      </>
    );
  }
}

export default App;
