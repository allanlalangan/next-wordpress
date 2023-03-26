import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ride Booking</title>
        <meta name='description' content='Ride share booking website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`font-sans ${inter.variable}`}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
