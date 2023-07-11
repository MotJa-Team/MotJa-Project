"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import { Providers } from "./providers";
import { Inter, Prociono } from "next/font/google";
import { useState, createContext, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Flex } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";

const inter = Inter({ subsets: ["latin"] });

export const AppContext = createContext();

export default function RootLayout({ children }) {
  const [account, setAccount] = useState("");
  const [tBalance, setTBalance] = useState(0);
  const [user, setUser] = useState();
  const [presents, setPresents] = useState([]);
  const [pageUser, setPageUser] = useState("");
  const [presentNum, setPresentNum] = useState(0);
  const [chargeRatio, setChargeRatio] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AppContext.Provider
            value={{
              account,
              setAccount,
              tBalance,
              setTBalance,
              pathname,
              user,
              setUser,
              presents,
              setPresents,
              presentNum,
              setPresentNum,
              pageUser,
              setPageUser,
              chargeRatio,
              setChargeRatio,
            }}
          >
            {pathname !== "/" && (
              <Flex flexWrap="wrap">
                <Spline
                  zIndex={0}
                  style={{
                    position: "absolute",
                    top: 0, // Change this line
                    left: 0, // Change this line
                    right: 0, // Change this line
                    bottom: 0, // Change this line
                  }}
                  scene="https://prod.spline.design/pWHUeuuxFRItopmZ/scene.splinecode"
                />
              </Flex>
            )}
            {pathname !== "/" && <Header />}
            {children}
            {pathname !== "/" && <Footer />}
          </AppContext.Provider>
        </Providers>
      </body>
    </html>
  );
}
