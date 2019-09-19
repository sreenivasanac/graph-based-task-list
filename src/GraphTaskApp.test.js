import React from 'react';
import ReactDOM from 'react-dom';
import GraphTaskApp from './GraphTaskApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GraphTaskApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
