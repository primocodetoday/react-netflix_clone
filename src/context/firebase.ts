import React from 'react';

export interface ContextValue {
  firebase: firebase.app.App;
}

const FirebaseContext = React.createContext({} as ContextValue);

export default FirebaseContext;
