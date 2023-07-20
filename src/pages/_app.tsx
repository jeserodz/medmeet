/* eslint-disable @next/next/no-sync-scripts */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="img/favicon.png" />
        <link rel="stylesheet" href="vendor/slick/slick.min.css" />
        <link rel="stylesheet" href="vendor/slick/slick-theme.min.css" />
        <link rel="stylesheet" href="vendor/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/osahan.css" />
        <script src="vendor/jquery/jquery.min.js" />
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script type="text/javascript" src="vendor/slick/slick.min.js"></script>
      </Head>
      <Component {...pageProps} />
      <Script src="js/osahan.js" />
    </>
  );
}
