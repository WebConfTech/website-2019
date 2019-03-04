import React from 'react';
import DefaultLayout from 'layouts/default';
import { Footer } from 'components/Footer';
import MainLogoImage from 'assets/images/logo-main.svg';
import styles from './styles.module.scss';

const SectionLayout = ({ sectionTitle, seoProps, children }) => {
  const defaultLayoutProps = { seoProps };
  defaultLayoutProps.seoProps.subtitle = sectionTitle;

  return (
    <DefaultLayout {...defaultLayoutProps}>
      <section className={styles.section}>
        <aside className={styles.left}>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              alt="Logo principal de Webconf edición 2019"
              src={MainLogoImage}
            />
          </div>
          <div className={styles.navigationContainer}>Navigation</div>
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
