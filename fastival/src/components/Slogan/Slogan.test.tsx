import React from 'react';
import ReactDOM from 'react-dom';
import Slogan from './Slogan';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slogan />, div);
  ReactDOM.unmountComponentAtNode(div);
});