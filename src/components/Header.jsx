"use client";

import Image from "next/image";
import "../styles/global.css";

import { Flex, Box, Spacer, ButtonGroup } from "@chakra-ui/react";

import Link from "next/link";
import Login from "./Login";
import M_Charge from "./M_Charge";
import { useContext } from "react";
import { AppContext } from "@/app/layout";
import M_AddGift from "./M_AddGift";

const Header = (account, setAccount, pathname) => {
  // const { account, setAccount, pathname } = useContext(AppContext);

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        mx="auto"
        mt="20px"
        gap="2"
        maxW="5xl"
        w="100%"
        //
        backgroundColor="rgba(0, 0, 0, 0.7)"
        boxShadow="0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15)"
        padding="0.75rem"
        borderRadius="99px"
        position="relative"
        zIndex={999}
      >
        <Box w="20%" my-auto>
          <Link href="/main">
            <Image
              onClick={() => {
                setButtonText("Get Started");
              }}
              src="/images/logo.png"
              width={200}
              height={200}
              alt="main-logo"
            />
          </Link>
        </Box>
        <Spacer />

        <ButtonGroup gap="3">
          {account ? <M_Charge account={account} /> : <></>}
          <Login account={account} setAccount={setAccount} />
          {pathname === "/main" ||
            (pathname === "/giftdetail" && (
              <Link href="/mypage">
                <button class="start-button">
                  <span class="text">Get Started</span>
                  <span class="blob"></span>
                  <span class="blob"></span>
                  <span class="blob"></span>
                  <span class="blob"></span>
                </button>
              </Link>
            ))}
          {pathname === "/mypage" && account && <M_AddGift />}
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Header;
