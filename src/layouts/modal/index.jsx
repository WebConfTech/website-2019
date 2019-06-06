import React from 'react';
import { Link } from 'gatsby';
import CloseIcon from 'assets/images/close.svg';
import DefaultLayout, { Content } from 'layouts/default';
import styles from './styles.module.scss';

const ModalLayout = ({ seoProps = {}, children }) => {
  const defaultLayoutProps = { seoProps };

  return (
    <DefaultLayout {...defaultLayoutProps}>
      <Content className={styles.content}>{children}</Content>
      <Link to="/" className={styles.close}>
        <img alt="cerrar" src={CloseIcon} />
      </Link>
    </DefaultLayout>
  );
};

export default ModalLayout;
