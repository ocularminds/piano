import React from 'react';
import ReactDOM from 'react-dom';
import Keyboard from './Keyboard';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('Test keyboard component rendering', () => {
  const keyPads = ['A', 'B', 'C', 'D'];
  it('renders keyboard div with class main', () => {
    const save = (e) => {};
    const div = document.createElement('div');
    ReactDOM.render(
      <Keyboard keyPads={keyPads} onSave={save} id={0} size={5} />,
      div
    );
  });

  it('should match the snapshot', () => {
    const save = (e) => {};
    const wrapper = shallow(
      <Keyboard keyPads={keyPads} onSave={save} id={0} size={1} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should contain div name when rendered', () => {
    const expected =
      '<div class="white" style="margin-left:160px;z-index:3;margin-top:-250px" label="G"><div class="key">G</div></div>';
    const save = (e) => {};
    const wrapper = shallow(
      <Keyboard keyPads={keyPads} onSave={save} id={0} size={1} />
    );
    const result = wrapper.instance().createKey('G', 2);
    expect(result['props'].pad).toBe('G');
    expect(shallow(result).html()).toBe(expected);
  });

  it('Should contain div name when rendered', () => {
    const save = (e) => {};
    const wrapper = shallow(
      <Keyboard keyPads={keyPads} onSave={save} id={0} size={1} />
    );
    const result = wrapper.instance().render();
    //wrapper.find('button').simulate('click');
    //const container = <div class="main"></div>;
    expect(result['props'].children.length).toEqual(2);
  });
});
