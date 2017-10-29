import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('displays loading message', () => {
  const app = renderer.create(<App/>);
  expect(app).toMatchSnapshot();
});
