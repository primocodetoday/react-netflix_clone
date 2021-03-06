﻿import React from 'react';

import StorySection from 'containers/StorySection';
import FooterSection from 'containers/FooterSection';
import HeaderSection from 'containers/HeaderSection';
import FaqContainer from 'containers/FaqContainer';
import { CTAForm, Banner } from 'components';

const Home = () => {
  return (
    <>
      <HeaderSection>
        <Banner>
          <Banner.Title>Unlimited movies, TV shows, and more.</Banner.Title>
          <Banner.SubTitle>Watch anywhere. Cancel anytime.</Banner.SubTitle>
          <CTAForm>
            <CTAForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </CTAForm.Text>
            <CTAForm.Input placeholder="Email address" />
            <CTAForm.Button>TRY 30 DAYS FREE</CTAForm.Button>
          </CTAForm>
        </Banner>
      </HeaderSection>
      <StorySection />
      <FaqContainer />
      <FooterSection />
    </>
  );
};

export default Home;
