import React from 'react';
import { shallow } from 'enzyme';
import Result from '../../components/Result';

test('It should correctly render Result.', () => {
  const wrapper = shallow(<Result />);
  expect(wrapper).toMatchSnapshot();
});
