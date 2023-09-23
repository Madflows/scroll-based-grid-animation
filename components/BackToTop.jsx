import Link from 'next/link';
import React from 'react'

export default function BackToTop() {
  return (
    <section className='content'>
      <div className='backtop' data-scroll data-scroll-speed='4'>
        Back to the top
      </div>
    </section>
  );
}
