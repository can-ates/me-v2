import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';

import Nav from './components/Nav';
import Header from './components/Header';
import TopLeftImg from './components/TopLeftImg';
import Motion from './components/Motion';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Mutlu Can Ates | Full Stack Software Engineer',
  description: 'JavaScript Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <div
          className={`page bg-site bg-cover bg-no-repeat text-white ${sora.variable} relative font-sora`}
        >
          <TopLeftImg />
          <Nav />
          <Header />
          <Motion>{children}</Motion>
        </div>
      </body>
    </html>
  );
}
