import { Metadata } from 'next';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/png" href="img/favicon.png" />
        <title>Movbok - Movies, Events, Sports Website HTML Template</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/slick/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/slick/slick-theme.min.css"
        />
        <link
          href="vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/osahan.css" rel="stylesheet" />
      </head>
      {children}
      <Script src="vendor/jquery/jquery.min.js" />
      <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script type="text/javascript" src="vendor/slick/slick.min.js"></Script>
      <Script src="js/osahan.js"></Script>
    </html>
  );
}
