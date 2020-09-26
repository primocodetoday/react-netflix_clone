import React from 'react';

import JumbotronContainer from 'containers/JumbotronContainer';
import FooterContainer from 'containers/FooterContainer';
import FaqContainer from 'containers/FaqContainer';

import GlobalStyles from 'global-styles';
import 'normalize.css';

const App = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </div>
  );
};

export default App;
