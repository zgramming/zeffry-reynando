import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import CustomNavbar from "../components/reusable/custom_navbar";
import CustomFooter from "../components/reusable/custom_footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomNavbar />
      <Component {...pageProps} />
      <CustomFooter />
    </>
  );
}

export default MyApp;
