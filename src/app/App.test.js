import React from 'react';
import App from './App';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('Test component rendering', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should contain piano list in the properties', () => {
    const play = (e) => {};
    const wrapper = shallow(<App />);
    const result = wrapper.instance().render();
    expect(result['props'].pianos.length).toEqual(2);
  });
});
