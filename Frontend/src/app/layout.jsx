"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
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
  const [user, setUser] = useState([]);
  const [presents, setPresents] = useState([]);
  const [presentNum, setPresentNum] = useState(0);
  const [pageUser, setPageUser] = useState("");
  const [chargeRatio, setChargeRatio] = useState([]);

  const pathname = usePathname();

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_URL + pathname);
  }, [pathname]);

  useEffect(() => {
    const getData = async () => {
      try {
        const collectionRef = firestore.collection(
          pageUser //여기에 메타마스크 주소를 받아오면 됨!!
        );

        // const collectionRef = firestore.collection({ pageUser });
        const querySnapshot = await collectionRef.get();

        const docsData = querySnapshot.docs
          .filter((doc) => doc.id !== "0")
          .map((doc) => {
            doc.data();
            const mapGift = doc.data();
            const { giftNum, giftName, giftPrice, giftUrl } = mapGift;

            return {
              giftNum,
              giftName,
              giftPrice,
              giftUrl,
            };
          });

        const usersData = querySnapshot.docs
          .filter((doc) => doc.id == 0)
          .map((doc) => {
            doc.data();
            const mapUser = doc.data();
            const { addr, birth, name, num } = mapUser;

            return { addr, birth, name, num };
          });
        setPresents(docsData);
        setUser(usersData);
        // setIsLoading(false);

        console.log(usersData);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [pageUser]);

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
              pageUser,
              setPageUser,
              chargeRatio,
              setChargeRatio,
              presentNum,
              setPresentNum,
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
            {/* {pathname !== "/" && <Footer />} */}
          </AppContext.Provider>
        </Providers>
      </body>
    </html>
  );
}
