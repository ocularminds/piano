import React from 'react';
import ReactDOM from 'react-dom';
import Piano from './Piano';
import PianoList from './PianoList';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

it('Should not crash when PianoList is rendering', () => {
  const models = [{name: 'Gushi', keyPads: ['A', 'B', 'C', 'D', 'E', 'F']}];
  const div = document.createElement('div');
  ReactDOM.render(<PianoList models={models} />, div);
});

it('Should contain piano model name when rendered', () => {
  const models = [{name: 'Gushi', keyPads: ['A', 'B', 'C', 'D', 'E', 'F']}];
  const wrapper = shallow(<Piano model={models[0]} id={0} />);
  const pianoName = <h2>Gushi</h2>;
  expect(wrapper.contains(pianoName)).toEqual(true);
});

describe('Show verify compoenent state for saving log data', () => {
  it('Should contain initial log data LOGS: ', () => {
    const idx = 1;
    const model = {name: 'Gushi', keyPads: ['A', 'B', 'C', 'D']};
    const wrapper = shallow(<Piano model={model} key={idx} id={idx} />);
    expect(wrapper.state('logs')).toBe('LOGS: ');
  });

  it('Should increase the content of the LOG data after save', () => {
    const idx = 1;
    const model = {name: 'Gushi', keyPads: ['A', 'B', 'C', 'D']};
    const wrapper = shallow(<Piano model={model} key={idx} id={idx} />);
    const instance = wrapper.instance();
    instance.save('D');
    instance.save('F');
    expect(wrapper.state('logs')).toBe('LOGS: ,D,F');
  });
});

describe('Should not crash when playing back', () => {
  it('Should not crash when playing text', () => {
    const idx = 1;
    const model = {name: 'Casino', keyPads: ['A', 'B', 'C', 'D']};
    const wrapper = shallow(<Piano model={model} key={idx} id={idx} />);

    const casino = <h2>Casino</h2>;
    expect(wrapper.contains(casino)).toEqual(true);
    const instance = wrapper.instance();
    instance.play('D');
    instance.play('F, G, A, C');
    expect(instance.NOTES).toStrictEqual(["A", "B", "C", "D", "E", "F", "G"]);
  });

  it('Should not crash when playing empty text', () => {
    const idx = 1;
    const model = {name: 'Casino', keyPads: ['A', 'B', 'C', 'D']};
    const wrapper = shallow(<Piano model={model} key={idx} id={idx} />);
    const casino = <h2>Casino</h2>;
    expect(wrapper.contains(casino)).toEqual(true);

    const instance = wrapper.instance();
    instance.play('');
  });
});
