import React from 'react';
import Piano from './Piano';

class PianoList extends React.Component {
  constructor(props) {
    super(props);
    this.createPianos = this.createPianos.bind(this);
  }

  createPianos(index, piano) {
    return (
      <Piano key={index} model={piano} onPlay={this.props.onPlay} id={index} />
    );
  }

  render() {
    return (
      <div>
        <h1>-- My Piano --</h1>
        {this.props.pianos &&
          this.props.pianos.map((piano, index) =>
            this.createPianos(index, piano)
          )}
      </div>
    );
  }
}

export default PianoList;
