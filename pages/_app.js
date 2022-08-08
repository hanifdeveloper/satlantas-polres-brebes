import Head from 'next/head';
import '../styles/core/bootstrap.min.css';
import '../styles/core/google.fonts.css';
import '../styles/core/aos.css';
// import '../styles/globals.css';

import '../styles/utilities.css';
import '../styles/homepage.css';
// import '../styles/detail.css';
// import '../styles/checkout.css';
// import '../styles/complete-checkout.css';
// import '../styles/sign-in.css';
// import '../styles/sign-up.css';
// import '../styles/sign-up-photo.css';
// import '../styles/sign-up-success.css';
// import '../styles/404-not-found.css';
// import '../styles/sidebar.css';
// import '../styles/overview.css';
// import '../styles/transactions.css';
// import '../styles/transactions-detail.css';
// import '../styles/edit-profile.css';
import '../styles/navbar-log-in.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Satlantas Polres Brebes</title>
        <meta name="description" content="Website ini merupakan Layanan Masyarakat bagi warga Brebes dan sekitarnya untuk dapat selalu update dan mendapat informasi terkait Lalu Lintas." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
