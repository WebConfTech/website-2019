import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { CFP } from 'data/constants';
import { CTALeafLike } from 'lib';
import { Logo } from 'components/Logo';
import { Menu } from 'components/Menu';
import { AddEmailForm } from 'components/AddEmailForm';
import { SocialNetworkLinks } from 'components/SocialNetworkLinks';
import DefaultLayout, { Sidebar, Footer, Content } from 'layouts/default';
import styles from './styles.module.scss';

const LandingLayout = ({ seoProps, children }) => {
  const defaultLayoutProps = { seoProps };

  return (
    <DefaultLayout {...defaultLayoutProps}>
      <Content className={styles.content}>{children}</Content>
      <Sidebar>
        <Logo />
        <Menu />
      </Sidebar>
      <Footer className={styles.footer}>
        <div className={styles.contactContainer}>
          <AddEmailForm className={styles.newsletterForm} />
          <SocialNetworkLinks />
        </div>
        <CTALeafLike href={CFP.url} title={CFP.title} as={OutboundLink} target="_blank">
          {CFP.title}
        </CTALeafLike>
      </Footer>
    </DefaultLayout>
  );
};

LandingLayout.defaultProps = {
  seoProps: {}
};

export default LandingLayout;
