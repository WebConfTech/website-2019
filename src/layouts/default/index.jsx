import React from 'react';
import { ThemeProvider } from 'styled-components';

// Constants
import { SEO_DATA } from 'data/constants';

// Themes
import theme from 'lib/theme';

// Components
import SEO from 'components/seo';

const DefaultLayout = ({ children, seoProps }) => {
  const _seoProps = {
    ...SEO_DATA,
    ...seoProps
  };

  if (_seoProps.subtile) {
    _seoProps.title = `${_seoProps.title}${_seoProps.separator}${seoProps.subtitle}`;
    delete _seoProps.subtitle;
  }

  delete _seoProps.separator;

  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO {..._seoProps} />
        {children}
      </>
    </ThemeProvider>
  );
};

DefaultLayout.defaultProps = {
  seoProps: {}
};

export default DefaultLayout;
