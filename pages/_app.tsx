// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import CustomNavbar from "../components/reusable/custom_navbar";
import CustomFooter from "../components/reusable/custom_footer";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zeffry Reynando</title>
      </Head>
      <CustomNavbar />
      <Component {...pageProps} />
      <CustomFooter />
    </>
  );
}

export default MyApp;
