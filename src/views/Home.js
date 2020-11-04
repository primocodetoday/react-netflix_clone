import React from 'react';

import { StorySection } from 'containers/StorySection';
import { FooterContainer } from 'containers/FooterContainer';
import { HeaderContainer } from 'containers/HeaderContainer';
import { FaqContainer } from 'containers/FaqContainer';
import { CTAForm, Banner } from 'components';

export const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Banner>
          <Banner.Title>Unlimited movies, TV shows, and more.</Banner.Title>
          <Banner.SubTitle>Watch anywhere. Cancel anytime.</Banner.SubTitle>
          <CTAForm>
            <CTAForm.Text>Ready to watch? Enter your email to create or restart your membership.</CTAForm.Text>
            <CTAForm.Input placeholder="Email address" />
            <CTAForm.Button>TRY 30 DAYS FREE</CTAForm.Button>
          </CTAForm>
        </Banner>
      </HeaderContainer>
      <StorySection />
      <FaqContainer />
      <FooterContainer />
    </>
  );
};
