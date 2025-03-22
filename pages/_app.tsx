import type { AppProps } from "next/app";
import "../pages/globals.css"; // Ensure correct path

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
