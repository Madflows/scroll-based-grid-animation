import '@/styles/globals.scss';
import { preloadFonts, preloadImages } from '@/utils/functions';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const backtopEl = document.querySelector('.backtop');
    const headerEl = document.querySelector('#header');
    Promise.all([
      preloadImages('.tiles__line-img'),
    ]).then(() => {
      (async () => {
        document.body.classList.remove('loading');

        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        const scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
        });

        backtopEl.addEventListener('click', () => scroll.scrollTo(headerEl));
      })();
    });
  }, []);
  return <Component {...pageProps} />;
}
