import React from 'react';

interface ContextProps {
  firebase?: firebase.app.App;
}

const FirebaseContext = React.createContext<Partial<ContextProps>>({});

export default FirebaseContext;
