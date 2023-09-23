import imagesLoaded from 'imagesloaded';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    );
  });
};

// Preload images
export const preloadFonts = (id) => {
  return new Promise((resolve) => {
    WebFont.load({
      typekit: {
        id: id,
      },
      active: resolve,
    });
  });
};



export function cn(...args) {
  return twMerge(clsx(args));
}
