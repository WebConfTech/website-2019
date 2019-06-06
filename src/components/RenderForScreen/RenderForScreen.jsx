import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from './styles.module.scss';

export const RenderForScreen = ({ onMobile, onDesktop }) => {
  const [showDesktop, setShowDesktop] = useState(null);
  const container = useRef(null);
  const detectContainerVisibility = () => {
    if (container.current) {
      setShowDesktop(!!container.current.offsetWidth);
    }
  };
  useEffect(() => {
    global.addEventListener('load', detectContainerVisibility);
    global.addEventListener('resize', detectContainerVisibility);
    detectContainerVisibility();
    return () => {
      global.removeEventListener('load', detectContainerVisibility);
      global.removeEventListener('resize', detectContainerVisibility);
    };
  }, []);

  const contents = useMemo(() => (showDesktop ? onDesktop() : onMobile()), [showDesktop]);

  return (
    <>
      <div className={styles.container} ref={container} />
      {contents}
    </>
  );
};
