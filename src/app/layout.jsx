"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import { Providers } from "./providers";
import { Inter, Prociono } from "next/font/google";
import { useState, createContext } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const AppContext = createContext();

export default function RootLayout({ children }) {
  const [account, setAccount] = useState("");
  const [tBalance, setTBalance] = useState(0);

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppContext.Provider
            value={{ account, setAccount, tBalance, setTBalance, pathname }}
          >
            {pathname !== "/" && (
              <Header account={account} setAccount={setAccount} />
            )}
            {children}
            {pathname !== "/" && <Footer />}
          </AppContext.Provider>
        </Providers>
      </body>
    </html>
  );
}
