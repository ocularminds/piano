import React from 'react';
import './App.css';
import PianoList from '../components/piano/PianoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pianos: 1, keyboards: [], classNames: []};
  }

  onKeyboardClick(key) {}

  play(keys) {}

  render() {
    return (
      <>
        <h1>-- My Piano --</h1>
        <PianoList />
      </>
    );
  }
}

export default App;
