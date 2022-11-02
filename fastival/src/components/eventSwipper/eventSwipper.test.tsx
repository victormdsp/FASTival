import React from 'react';
import ReactDOM from 'react-dom';
import EventSwipper from './EventSwipper';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventSwipper />, div);
  ReactDOM.unmountComponentAtNode(div);
});