import React from 'react';
import { shallow } from 'enzyme';
import { Find } from '../../components/Find';
import result from '../fixtures/result';

test('It should correctly render Find.', () => {
  const wrapper = shallow(<Find result={result}  />);
  expect(wrapper).toMatchSnapshot();
});