import React from 'react';

import JumbotronContainer from 'components/organisms/JumbotronContainer';
import FooterContainer from 'components/organisms/FooterContainer';
import FaqContainer from 'components/organisms/FaqContainer';

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
