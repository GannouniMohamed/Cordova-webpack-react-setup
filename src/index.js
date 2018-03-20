import React from 'react';
import ReactDOM from 'react-dom';

if(window.cordova) {
  document.addEventListener('deviceready', function() {
    ReactDOM.render(
      <h1>Hello, world!</h1>,
      document.getElementById('root')
    );
  });
}
else {
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );
}