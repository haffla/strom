import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/main.css";
import { useEffect } from "react";
import { StateProvider } from "../store";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log("HU");
  });

  return (
    <StateProvider>
      <Component {...pageProps} />;
    </StateProvider>
  );
}
