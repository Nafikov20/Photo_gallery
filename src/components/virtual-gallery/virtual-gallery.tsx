import React, { useEffect } from 'react';
import './virtual-gallery.css';
import cn from 'classnames';

import { UseVirtualGallery } from './use-virtual-gallery';

export const VirtualGallery = () => {
  const { mockData } = UseVirtualGallery();
  useEffect(() => {
    const zSpacing = -1000;
    let lastPost = zSpacing / 5;
    const $frames = document.getElementsByClassName('frame');
    const frames = Array.from($frames);
    const zVals: number[] = [];

    window.onscroll = function () {
      const top = document.documentElement.scrollTop;
      const delta = lastPost - top;
      lastPost = top;

      frames.forEach(function (n, i) {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * -6;
        const frame = frames[i];
        const transform = `translateZ(${zVals[i]}px)`;
        const opacity = zVals[i] < Math.abs(zSpacing) / 1.6 ? 1 : 0;
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
      });
    };

    window.scrollTo(1, 0);
  }, [mockData]);

  return (
    <div className='container fixed h-full w-full'>
      <section className='gallery h-full'>
        {mockData.map(({ title, idx, img, positionImg, video, subtitle }) => (
          <div
            key={idx}
            className={cn('frame absolute flex h-full w-full items-center justify-center', {
              'frame-bg': img !== null,
            })}
          >
            {video !== null ? (
              <div className='frame__content'>
                <video
                  autoPlay
                  loop
                  muted
                  src={video}
                  className={cn(
                    'frame-media',
                    { 'frame-media-left': !positionImg },
                    {
                      'frame-media-right': positionImg,
                    }
                  )}
                />
              </div>
            ) : (
              <div className={cn('frame__content', { 'frame-text-left': title || subtitle !== null })}>
                {img === null ? (
                  <>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                  </>
                ) : (
                  <div
                    style={{ backgroundImage: `url(${img})` }}
                    className={cn(
                      'frame-media relative bg-cover bg-center text-fuchsia-600',
                      { 'frame-media-left': !positionImg },
                      {
                        'frame-media-right': positionImg,
                      }
                    )}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};
