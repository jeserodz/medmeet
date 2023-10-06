'use client';

import classNames from 'classnames';

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
            className="osahan-slider-item rounded home-slider"
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className="overlay rounded">Event title</div>
          </div>
        ))}
    </div>
  );
}
