import React from 'react';
import { Link } from 'gatsby';
import { Logo } from 'components/Logo';
import { LogoSmall } from 'components/LogoSmall';
import { Menu } from 'components/Menu';
import { CFPButton } from 'components/CFPButton';
import { AddEmailForm } from 'components/AddEmailForm';
import { SocialNetworkLinks } from 'components/SocialNetworkLinks';
import { BackButtonMobile } from 'lib/Button';
import DefaultLayout, { Sidebar, Footer, Content } from 'layouts/default';
import styles from './styles.module.scss';

export const SectionTitle = ({ className = '', children, ...props }) => (
  <h1 className={`${styles.title} ${className}`} {...props}>
    {`{${children}}`}
  </h1>
);

const SectionLayout = ({
  title,
  seoProps,
  className,
  newsletter = false,
  cfp = false,
  hideFooterOnMobile = false,
  hideMenuOnMobile = false,
  hideSidebarOnMobile = false,
  children,
  menuComponent,
  mobileBackButtonRoute
}) => {
  const defaultLayoutProps = { seoProps };
  defaultLayoutProps.seoProps.subtitle = title;

  return (
    <DefaultLayout {...defaultLayoutProps}>
      <Content className={`${styles.content} ${hideSidebarOnMobile ? styles.RemoveSpacing : ''}`}>
        <section className={className}>{children}</section>
      </Content>
      <Sidebar className={`${styles.sidebar} ${hideSidebarOnMobile ? styles.HideOnMobile : ''}`}>
        <Logo className={styles.desktopLogo} />
        {mobileBackButtonRoute ? <BackButtonMobile as={Link} to={mobileBackButtonRoute} /> : null}
        <LogoSmall className={styles.mobileLogo} disabled={!!mobileBackButtonRoute} />
        <h1 className={styles.titleMobile}>{title}</h1>
        {menuComponent ? (
          menuComponent({ hideOnMobile: hideMenuOnMobile })
        ) : (
          <Menu short hideOnMobile={hideMenuOnMobile} />
        )}
      </Sidebar>
      <Footer className={`${styles.footer} ${hideFooterOnMobile ? styles.HideOnMobile : ''}`}>
        <div className={styles.contactContainer}>
          {newsletter ? <AddEmailForm className={styles.newsletterForm} /> : null}
          <SocialNetworkLinks />
        </div>
        {cfp ? <CFPButton className={styles.cfpButton} /> : null}
      </Footer>
    </DefaultLayout>
  );
};

SectionLayout.defaultProps = {
  seoProps: {}
};

export default SectionLayout;
