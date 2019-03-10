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

export const Sidebar = ({ children, className, ...props }) => (
  <aside className={`${styles.sidebar} ${className ? className : ''}`} {...props}>
    {children}
  </aside>
);

export const Content = ({ children, className, ...props }) => (
  <main className={`${styles.content} ${className ? className : ''}`}>{children}</main>
);

export const Footer = ({ children, className, ...props }) => (
  <footer className={`${styles.footer} ${className ? className : ''}`}>{children}</footer>
);

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
