import React from 'react';

import Story from 'components/organisms/Story';
import FooterSection from 'components/organisms/FooterSection';
import HeaderSection from 'components/organisms/HeaderSection';
import Faq from 'components/organisms/Faq';
import { CTAForm, Banner } from 'components/molecules';

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
      <Story />
      <Faq />
      <FooterSection />
    </>
  );
};

export default Home;
