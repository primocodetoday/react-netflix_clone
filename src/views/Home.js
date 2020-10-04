import React from 'react';

import StorySection from 'Containers/StorySection';
import FooterSection from 'Containers/FooterSection';
import HeaderSection from 'Containers/HeaderSection';
import FaqContainer from 'Containers/FaqSection';
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
