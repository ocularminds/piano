import React from 'react';
import Piano from './Piano';

class PianoList extends React.Component {
  render() {
    return (
      <>
        {this.props.pianos &&
          this.props.pianos.map((piano, index) => {
            return <Piano key={index} model={piano} onPlay={this.props.onPlay} id={index}/>;
          })}
      </>
    );
  }
}

export default PianoList;
