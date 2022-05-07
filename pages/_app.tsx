import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DropdownContextProvider } from "../stores/dropdownContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DropdownContextProvider>
      <Component {...pageProps} />
    </DropdownContextProvider>
  );
}

export default MyApp;
