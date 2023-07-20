import { Metadata } from 'next';
import Script from 'next/script';
import '../../public/vendor/slick/slick.min.css';
import '../../public/vendor/slick/slick-theme.min.css';
import '../../public/vendor/fontawesome-free/css/all.min.css';
import '../../public/vendor/bootstrap/css/bootstrap.min.css';
import '../../public/css/osahan.css';

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
        <Script src="vendor/jquery/jquery.min.js" />
        <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script type="text/javascript" src="vendor/slick/slick.min.js"></Script>
      </head>
      {children}
      <Script src="js/osahan.js"></Script>
    </html>
  );
}
