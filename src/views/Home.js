import React from 'react';

import Story from 'components/organisms/Story';
import FooterSection from 'components/organisms/FooterSection';
import HeaderSection from 'components/organisms/HeaderSection';
import Faq from 'components/organisms/Faq';
import { CTAForm } from 'components/molecules';

const Home = () => {
  return (
    <>
      <HeaderSection>
        <CTAForm>
          <CTAForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </CTAForm.Text>
          <CTAForm.Input placeholder="Email address" />
          <CTAForm.Button>Try now</CTAForm.Button>
        </CTAForm>
      </HeaderSection>
      <Story />
      <Faq />
      <FooterSection />
    </>
  );
};

export default Home;
