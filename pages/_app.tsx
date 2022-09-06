import CustomNavbar from "../components/reusable/custom_navbar";
import CustomFooter from "../components/reusable/custom_footer";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Zeffry Reynando</title>
			</Head>
			<NextNProgress />
			<CustomNavbar />
			<Component {...pageProps} />
			<CustomFooter />
		</>
	);
}

export default MyApp;
