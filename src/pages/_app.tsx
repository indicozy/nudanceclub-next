import { type AppType } from "next/dist/shared/lib/utils";

import { Montserrat } from "next/font/google";
import "~/styles/globals.css";

const mont = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mont",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${mont.variable} font-mont`}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
