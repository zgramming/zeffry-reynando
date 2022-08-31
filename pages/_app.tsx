import CustomNavbar from "../components/reusable/custom_navbar";
import CustomFooter from "../components/reusable/custom_footer";
import Head from "next/head";
import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zeffry Reynando</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
          integrity="sha512-q3eWabyZPc1XTCmF+8/LuE1ozpg5xxn7iO89yfSOd5/oKvyqLngoNGsx8jq92Y8eXJ/IRxQbEC+FGSYxtk2oiw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <CustomNavbar />
      <Component {...pageProps} />
      <CustomFooter />
    </>
  );
}

export default MyApp;
