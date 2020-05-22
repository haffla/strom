import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/main.css";
import { StateProvider } from "../store";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />;
    </StateProvider>
  );
}
