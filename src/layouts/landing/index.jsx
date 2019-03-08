import React from 'react';
import DefaultLayout from 'layouts/default';
import { Footer } from 'components/Footer';

const LandingLayout = ({ seoProps, children }) => {
  const defaultLayoutProps = { seoProps };

  return (
    <DefaultLayout {...defaultLayoutProps}>
      {children}
      <Footer />
    </DefaultLayout>
  );
};

LandingLayout.defaultProps = {
  seoProps: {}
};

export default LandingLayout;
