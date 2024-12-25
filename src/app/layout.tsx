import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import './globals.css';
import MainLayout from '@/components/layout';
import Providers from './providers';
import 'react-loading-skeleton/dist/skeleton.css';

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'EcoBrew',
  description: 'Created by the team at EcoBrew',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={metadata.description!} />
        <title>EcoBrew</title>
      </head>
      <body className={`${lora.variable}`}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
