import { Bodoni_Moda, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import LoadingScreen from '@/components/LoadingScreen';
import GlassPageLoader from '@/components/GlassPageLoader';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SmoothScroll from '@/components/SmoothScroll';
import PageTransition from '@/components/PageTransition';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata = {
  title: 'DESIGN ARK',
  description:
    'Design Ark is an architectural and interior design studio formulating quiet luxury residences, commercial flagships, and executive workplaces.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#141210',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${geist.variable} ${geistMono.variable}`}>
      <body
        suppressHydrationWarning
        className="bg-[#141210] text-[#FAF9F4] antialiased selection:bg-[#C5A880] selection:text-[#141414]"
      >
        <SmoothScroll>
          <LoadingScreen />
          <GlassPageLoader />
          <SiteHeader />
          <PageTransition>{children}</PageTransition>
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
