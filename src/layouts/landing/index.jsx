import React from 'react';
import { Logo } from 'components/Logo';
import { Menu } from 'components/Menu';
import { CFPButton } from 'components/CFPButton';
import { AddEmailForm } from 'components/AddEmailForm';
import { SocialNetworkLinks } from 'components/SocialNetworkLinks';
import DefaultLayout, { Sidebar, Footer, Content } from 'layouts/default';
import styles from './styles.module.scss';

const LandingLayout = ({ seoProps, children }) => {
  const defaultLayoutProps = { seoProps };

  return (
    <DefaultLayout {...defaultLayoutProps}>
      <Content className={styles.content}>{children}</Content>
      <Sidebar className={styles.sidebar}>
        <Logo className={styles.logo} />
        <Menu />
      </Sidebar>
      <Footer className={styles.footer}>
        <div className={styles.contactContainer}>
          <AddEmailForm className={styles.newsletterForm} />
          <SocialNetworkLinks />
        </div>
        <CFPButton />
      </Footer>
    </DefaultLayout>
  );
};

LandingLayout.defaultProps = {
  seoProps: {}
};

export default LandingLayout;
