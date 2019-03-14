import React from 'react';
import { Logo } from 'components/Logo';
import { LogoSmall } from 'components/LogoSmall';
import { Menu } from 'components/Menu';
import { CFPButton } from 'components/CFPButton';
import { AddEmailForm } from 'components/AddEmailForm';
import { SocialNetworkLinks } from 'components/SocialNetworkLinks';
import DefaultLayout, { Sidebar, Footer, Content } from 'layouts/default';
import styles from './styles.module.scss';

const SectionLayout = ({ title, seoProps, children }) => {
  const defaultLayoutProps = { seoProps };
  defaultLayoutProps.seoProps.subtitle = title;

  return (
    <DefaultLayout {...defaultLayoutProps}>
      <Content>
        <section>
          <h1 className={styles.title}>{`{${title}}`}</h1>
          {children}
        </section>
      </Content>
      <Sidebar className={styles.sidebar}>
        <Logo className={styles.desktopLogo} />
        <LogoSmall className={styles.mobileLogo} />
        <h1 className={styles.titleMobile}>{title}</h1>
        <Menu short />
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

SectionLayout.defaultProps = {
  seoProps: {}
};

export default SectionLayout;
