import React from 'react';
import { render } from 'react-dom';
import { App } from 'App';
import FirebaseContext from 'context/firebase';
import firebase from 'firebase/init';
import { GlobalStyle } from 'theme/global-styles';

render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
