import React from 'react';
import DefaultLayout, { Content } from 'layouts/default';
import styles from './styles.module.scss';

const ModalLayout = ({ seoProps = {}, children }) => {
  const defaultLayoutProps = { seoProps };

  return (
    <DefaultLayout {...defaultLayoutProps}>
      <Content className={styles.content}>{children}</Content>
    </DefaultLayout>
  );
};

export default ModalLayout;
