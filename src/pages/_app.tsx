import { type AppType } from "next/dist/shared/lib/utils";

import { Montserrat } from "next/font/google";
import { Layout } from "~/components/layout";
import { Sidebar } from "~/components/sidebar";
import "~/styles/globals.css";

const mont = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-mont",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout c={`${mont.variable} font-mont`}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
