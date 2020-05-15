import "../styles/global.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log("HU");
  }, []);
  return <Component {...pageProps} />;
}

