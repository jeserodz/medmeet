import Script from 'next/script';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { UserProvider } from '../../providers/UserProvider';
import { getSessionForServer, getUserFromSession } from '../../service';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSessionForServer();
  const user = await getUserFromSession(session);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/png" href="/img/favicon.png" />
        <title>MedMeet</title>
        {/* Slick Slider */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/vendor/slick/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/vendor/slick/slick-theme.min.css"
        />
        {/* Custom fonts for this template*/}
        <link
          href="/vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* Bootstrap core CSS */}
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        {/* Custom styles for this template */}
        <link href="/css/osahan.css" rel="stylesheet" />
        <link href="/css/custom.css" rel="stylesheet" />
        <Script src="/vendor/jquery/jquery.min.js" />
        <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script
          type="text/javascript"
          src="/vendor/slick/slick.min.js"
        ></Script>
      </head>
      <body suppressHydrationWarning>
        <UserProvider userFromServer={user}>
          <Header />
          <Navbar />
          {children}
          <Footer />
        </UserProvider>
      </body>
      <Script src="/js/osahan.js"></Script>
    </html>
  );
}
