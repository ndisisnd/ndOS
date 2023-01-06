import { Manrope } from "@next/font/google";
import Layout from "../components/Layout";
import styles from "../styles/globals.css";

const mr = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${mr.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
