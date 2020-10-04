import React from 'react';
import { CTAForm } from 'components';

const CtaContainer = () => {
  return (
    <CTAForm>
      <CTAForm.Text>
        Ready to watch? Enter your email to create or restart your membership.
      </CTAForm.Text>
      <CTAForm.Input placeholder="Email address" />
      <CTAForm.Button>TRY 30 DAYS FREE</CTAForm.Button>
    </CTAForm>
  );
};

export default CtaContainer;
