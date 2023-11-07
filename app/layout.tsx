import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import clsx from "clsx";
import Head from "next/head";
import Provider from "@/utils/Provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lottery CoinStrat",
  description: "Enrich Your Digital Assets",
  icons: "/images/favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <html lang="en">
        <Head>
          <meta name="description" content="COINSTRAT" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
          <meta property="og:image" content="/images/og_image.png" />
          <meta property="og:title" content="CoinStrat" />
          <meta
            property="og:description"
            content="Enrich Your Digital Assets"
          />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <body className={clsx(inter.className, "relative")}>
          <section className="bg-gray-100 flex flex-col overflow-hidden fixed inset-0 text-black">
            <ToastContainer />
            <header className="absolute w-full z-50">
              <Navbar />
            </header>
            <main className="relative flex flex-col w-full mt-14 lg:mx-auto overflow-y-auto overflow-x-hidden css-scroll">
              {children}
              <span className="my-9 lg:my-6" />
            </main>
          </section>
        </body>
      </html>
    </Provider>
  );
}
