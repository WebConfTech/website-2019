import React from 'react';
import { Logo } from 'components/Logo';
import { Menu } from 'components/Menu';
import { BuyTicketButton } from 'components/BuyTicketButton';
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
        <div className={styles.right}>
          <Menu dark className={styles.menu} />
          <div className={styles.info}>
            <div className={styles.date}>Sáb. 11/05, 08:30 hs</div>
            <div className={styles.address}>
              Auditorio Diego de Torres (UCC)
              <br />
              Obispo Trejo 323
            </div>
          </div>
        </div>
      </Sidebar>
      <Footer className={styles.footer}>
        <div className={styles.contactContainer}>
          <AddEmailForm className={styles.newsletterForm} />
          <SocialNetworkLinks />
        </div>
        <BuyTicketButton />
      </Footer>
    </DefaultLayout>
  );
};

LandingLayout.defaultProps = {
  seoProps: {}
};

export default LandingLayout;
