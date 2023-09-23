import Image from 'next/image';
import { Inter } from 'next/font/google';
import BackToTop from '@/components/BackToTop';
import { TilesSection } from '@/components/TilesSection';
import { ContentSection } from '@/components/ContentSection';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  
  return (
    <main id='main' data-scroll-container>
      <Navbar />
      <TilesSection />
      <ContentSection />
      <BackToTop />
    </main>
  );
}
