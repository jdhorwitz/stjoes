import React from 'react';
import About from './index';
import { shallow } from 'enzyme';


describe('About Component', () => {
  let enzymeWrapper;

  beforeEach(() => {
    enzymeWrapper = shallow(<About />);
  })

  it('should be rendered', () => {
    expect(enzymeWrapper).toBeDefined();
  })
})