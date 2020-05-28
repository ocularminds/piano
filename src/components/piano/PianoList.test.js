import React from 'react';
import {render, getByText} from '@testing-library/react';
import PianoList from './PianoList';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('Test for PianoList contents when rendered', () => {
  const pianos = [
    {
      name: 'Casino',
      keyPads: ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
    },
    {
      name: 'Korg 7781',
      keyPads: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'],
    },
  ];
  
  it('should match the snapshot', () => {
    const play = (e) => {};
    const wrapper = shallow(<PianoList pianos={pianos} onPlay={play} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders My Piano as Header', () => {
    const {getByText} = render(<PianoList />);
    const linkElement = getByText(/My piano/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Should contain piano name in the properties', () => {
    const play = (e) => {};
    const wrapper = shallow(<PianoList pianos={pianos} onPlay={play} />);
    const result = wrapper.instance().createPianos(2, pianos[1]);
    expect(result['props'].model.name).toEqual('Korg 7781');
  });

  it('Should contain total number of pianos when render', () => {
    const play = (e) => {};
    const wrapper = shallow(<PianoList pianos={pianos} onPlay={play} />);
    const result = wrapper.instance().render();
    expect(result['props'].children.length).toEqual(2);
  });
});
