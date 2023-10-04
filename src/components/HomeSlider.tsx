'use client';

import classNames from 'classnames';
import styles from './HomeSlider.module.css';

export function HomeSlider() {
  const slides = [
    '/img/slider1.jpeg',
    '/img/slider2.jpeg',
    '/img/slider3.jpeg',
  ];
  return (
    <div className="osahan-slider">
      {slides
        .concat(slides)
        .concat(slides)
        .map((src, i) => (
          <div
            key={i}
            className={classNames('osahan-slider-item', styles.slide)}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
    </div>
  );
}
