import React from 'react';
import { ThemeProvider } from 'styled-components';

// Constants
import { SEO_DATA } from 'data/constants';

// Themes
import theme from 'lib/theme';

// Components
import SEO from 'components/seo';

// Styles
import styles from './styles.module.scss';

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
      <div className={styles.container}>
        <SEO {..._seoProps} />
        {children}
      </div>
    </ThemeProvider>
  );
};

DefaultLayout.defaultProps = {
  seoProps: {}
};

export default DefaultLayout;
