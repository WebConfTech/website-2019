import React from 'react';
import { Logo } from 'components/Logo';
import { Menu } from 'components/Menu';
import { AddEmailForm } from 'components/AddEmailForm';
import { SocialNetworkLinks } from 'components/SocialNetworkLinks';
import DefaultLayout, { Sidebar, Footer, Content } from 'layouts/default';
import styles from './styles.module.scss';

const LandingLayout = ({ seoProps, children }) => {
  const defaultLayoutProps = { seoProps };

  return (
    <DefaultLayout {...defaultLayoutProps} className={styles.container}>
      <Content className={styles.content}>{children}</Content>
      <Sidebar className={styles.sidebar}>
        <Logo className={styles.logo} />
        <div className={styles.right}>
          <Menu dark className={styles.menu} />
        </div>
      </Sidebar>
      <Footer className={styles.footer}>
        <div className={styles.contactContainer}>
          <AddEmailForm className={styles.newsletterForm} />
          <SocialNetworkLinks />
        </div>
      </Footer>
    </DefaultLayout>
  );
};

LandingLayout.defaultProps = {
  seoProps: {}
};

export default LandingLayout;
