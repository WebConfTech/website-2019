import React from 'react';
import { Logo } from 'components/Logo';
import { LogoSmall } from 'components/LogoSmall';
import { Menu } from 'components/Menu';
import { CFPButton } from 'components/CFPButton';
import { AddEmailForm } from 'components/AddEmailForm';
import { SocialNetworkLinks } from 'components/SocialNetworkLinks';
import DefaultLayout, { Sidebar, Footer, Content } from 'layouts/default';
import styles from './styles.module.scss';

export const SectionTitle = ({ className = '', children, ...props }) => (
  <h1 className={`${styles.title} ${className}`} {...props}>
    {`{${children}}`}
  </h1>
);

const SectionLayout = ({ title, seoProps, className, children }) => {
  const defaultLayoutProps = { seoProps };
  defaultLayoutProps.seoProps.subtitle = title;

  return (
    <DefaultLayout {...defaultLayoutProps}>
      <Content className={styles.content}>
        <section className={className}>{children}</section>
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
        <CFPButton className={styles.cfpButton} />
      </Footer>
    </DefaultLayout>
  );
};

SectionLayout.defaultProps = {
  seoProps: {}
};

export default SectionLayout;
