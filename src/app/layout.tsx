import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const font = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: '#sonaकाaina',
  description: 'We are getting married!',
  authors: {
    name: 'Tapover India',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} scroll-smooth`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
