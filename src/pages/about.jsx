import React, { useState, useRef, useCallback, useEffect } from 'react';
import IconChevronLeftHuge from 'assets/images/icon-chevron-left-huge.svg';
import IconChevronRightHuge from 'assets/images/icon-chevron-right-huge.svg';
import SectionLayout from 'layouts/section';
import styles from './about.module.scss';

const AboutPage = () => {
  const [arrowsDisabledState, setArrowDisabledState] = useState({ left: true, right: false });
  const [scrollOffset, setScrollOffset] = useState(0);
  const contentRef = useRef(null);

  const scrollLeft = useCallback(() => {
    contentRef.current.scrollLeft -= scrollOffset;
  }, [scrollOffset, contentRef]);

  const scrollRight = useCallback(() => {
    contentRef.current.scrollLeft += scrollOffset;
  }, [scrollOffset, contentRef]);

  useEffect(() => {
    const contentEl = contentRef.current;
    const children = contentEl.children;
    let scrollOffset = 0;

    for (let i = 0; i < children.length && scrollOffset === 0; i++) {
      scrollOffset = children[i].offsetLeft - contentEl.offsetLeft;
    }

    setScrollOffset(scrollOffset);
  }, [contentRef, setScrollOffset]);

  useEffect(() => {
    const handler = () => {
      const contentEl = contentRef.current;
      const leftOffset = contentEl.scrollLeft;
      const currentWidth = contentEl.clientWidth;
      const width = contentEl.scrollWidth;

      setArrowDisabledState({
        left: leftOffset === 0,
        right: leftOffset + currentWidth === width
      });
    };

    contentRef.current.addEventListener('scroll', handler);

    return () => contentRef.current.removeEventListener('scroll', handler);
  }, [contentRef, setArrowDisabledState]);

  return (
    <SectionLayout title="la conferencia">
      <div className={styles.container}>
        <div
          className={`
            ${styles.arrow}
            ${styles.leftArrow}
            ${arrowsDisabledState.left ? styles.arrowDisabled : ''}
          `}
          onClick={scrollLeft}
        >
          <img src={IconChevronLeftHuge} alt="flecha izquierda" />
        </div>
        <div className={styles.content} ref={contentRef}>
          <p>
            En la actualidad, la industria del desarrollo de software en la Provincia de Córdoba ha
            tenido un crecimiento notable, con tendencia a convertirse en uno de los motores
            centrales del progreso económico cordobés. Carreras orientadas a tecnologías de
            información y sistemas se han pasado a ser de las más requeridas en los últimos años
            debido a este crecimiento en la industria, formando cada vez más profesionales para
            cubrir los puestos de trabajo generados por pequeñas y grandes empresas, tanto locales
            como multinacionales, establecidas en la ciudad de Córdoba.
          </p>
          <p>
            Este crecimiento no solo implica la generación de nuevos puestos de trabajo, sino una
            cultura alrededor de la industria, formada por desarrolladores profesionales y
            principiantes que se ven inmersos mas y mas en nuevas tecnologías, con la necesidad de
            aprender e investigar sobre estos temas y poder compartirlos con el resto de la
            comunidad.
          </p>
          <p>
            Desde hace varios años esta comunidad, y haciendo hincapié en el Desarrollo de
            aplicaciones web, ha estado creciendo junto con las ganas de crear contenido y compartir
            al resto los conocimientos y experiencias vividas en el ámbito de la industria,
            surgiendo varias iniciativas de talleres, meetups y conferencias en el espectro de
            tecnologías relacionadas.
          </p>
          <p>
            Sin embargo, actualmente no hay una conferencia relativamente grande apuntada al
            desarrollo web en particular. Los espacios que existen son limitados en cuanto a la
            cantidad de gente y a la profundidad de los temas abordados, y si bien existen eventos
            de esta magnitud en Buenos Aires, existe una dificultad real en la capacidad de las
            personas para sumarse y participar, ya sea por su elevado costo en traslado y hospedaje
            así como el tiempo que conlleva, más aún teniendo en cuenta que muchos de los
            interesados trabajan en relación de dependencia localmente.
          </p>
          <p>
            La idea de este proyecto es aprovechar el momentum generado por la comunidad para formar
            una comunidad aún más grande y activa de desarrollado- res alrededor del desarrollo web,
            proponiendo un espacio donde se puedan presentar y discutir temas más amplios que los
            disponibles actualmente en los espacios existentes.
          </p>
        </div>
        <div
          className={`
            ${styles.arrow}
            ${styles.rightArrow}
            ${arrowsDisabledState.right ? styles.arrowDisabled : ''}
          `}
          onClick={scrollRight}
        >
          <img src={IconChevronRightHuge} alt="flecha derecha" />
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutPage;
