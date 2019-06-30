import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('It should correctly render Header.', () => {
  const wrapper = shallow(<Header  />);
  expect(wrapper).toMatchSnapshot();
});
