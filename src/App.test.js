import React from 'react';
import ReactDOM from 'react-dom';
import QuoteMachine from './components/QuoteMachine';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuoteMachine />, div);
  ReactDOM.unmountComponentAtNode(div);
});
