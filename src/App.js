import React from 'react';
import { JumbotronContainer } from 'containers/JumbotronContainer';
import GlobalStyles from 'global-styles';
import 'normalize.css';

const App = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <JumbotronContainer />
    </div>
  );
};

export default App;
