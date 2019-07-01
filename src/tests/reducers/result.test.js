import resultReducer from '../../reducers/result';

test("It should setup default values correctly.", () => {
  const state = resultReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({});
});


