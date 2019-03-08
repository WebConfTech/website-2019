import React from 'react';
import { Link } from 'gatsby';
import DefaultLayout from 'layouts/default';
import { Menu } from 'components/Menu';
import { Footer } from 'components/Footer';
import MainLogoImage from 'assets/images/logo-main.svg';
import MobileLogoImage from 'assets/images/logo-mobile.svg';
import styles from './styles.module.scss';

const SectionLayout = ({ sectionTitle, seoProps, currentPath, children }) => {
  const defaultLayoutProps = { seoProps };
  defaultLayoutProps.seoProps.subtitle = sectionTitle;

  return (
    <DefaultLayout {...defaultLayoutProps}>
      <section className={styles.section}>
        <aside className={styles.left}>
          <div className={styles.logoContainer}>
            <Link to="/">
              <img
                className={styles.logo}
                alt="Logo principal de Webconf edición 2019"
                src={MainLogoImage}
              />
              <img
                className={styles.logoMobile}
                alt="Logo principal de Webconf edición 2019"
                src={MobileLogoImage}
              />
            </Link>
          </div>
          <h1 className={styles.titleMobile}>{sectionTitle}</h1>
          <div className={styles.navigationContainer}>
            <Menu currentPath={currentPath} />
          </div>
        </aside>
        <div className={styles.right}>
          <h1 className={styles.title}>{`{${sectionTitle}}`}</h1>
          <div className={styles.content}>{children}</div>
        </div>
      </section>
      <Footer />
    </DefaultLayout>
  );
};

SectionLayout.defaultProps = {
  seoProps: {}
};

export default SectionLayout;
