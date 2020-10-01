import React from 'react';

import StorySection from 'components/organisms/StorySection';
import FooterWrapper from 'components/organisms/FooterWrapper';
import FaqSection from 'components/organisms/FaqSection';

import GlobalStyles from 'global-styles';
import 'normalize.css';

const App = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <StorySection />
      <FaqSection />
      <FooterWrapper />
    </div>
  );
};

export default App;
