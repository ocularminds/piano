import React from 'react';
import {render} from '@testing-library/react';
import KeyPad from './KeyPad';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('Test KeyPad components when rendering', () => {
  it('should match the snapshot', () => {
    const save = (e) => {};
    const wrapper = shallow(
      <KeyPad pad={'F'} clazz={'WHITE'} keyid={3} onSave={save} id={1} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders keypad with label', () => {
    const save = (e) => {};
    const {getByText} = render(
      <KeyPad pad={'F'} clazz={'WHITE'} keyid={3} onSave={save} id={1} />
    );
    const linkElement = getByText(/F/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Should contain piano name in the properties', () => {
    const save = (e) => {};
    const wrapper = shallow(
      <KeyPad pad={'F'} clazz={'WHITE'} keyid={3} onSave={save} id={1} />
    );
    const result = wrapper.instance().createPad();
    expect(result['semitone']).toEqual(false);
  });

  it('Should contain black key with # surfix', () => {
    const save = (e) => {};
    const wrapper = shallow(
      <KeyPad pad={'A'} clazz={'BLACK'} keyid={3} onSave={save} id={1} />
    );
    const result = wrapper.instance().createPad();
    expect(result['semitone']).toEqual(false);
  });

  it('Should not contain black key for semitones', () => {
    const save = (e) => {};
    const wrapper = shallow(
      <KeyPad pad={'B'} clazz={'BLACK'} keyid={3} onSave={save} id={1} />
    );
    const result = wrapper.instance().createPad();
    expect(result['semitone']).toEqual(true);
  });
});
