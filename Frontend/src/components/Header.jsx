"use client";

import Image from "next/image";

import { AppContext } from "@/app/layout";
import { Box, ButtonGroup, Flex, Spacer, useToast } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import { firestore } from "../app/firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import { Modal_SignUp } from "./Modal_SignUp";
import { Modal_Charge } from "./Modal_Charge";
import { Modal_AddGift } from "./Modal_AddGift";
import { NFT_CONTRACT } from "@/lib/web3.config";

export default function Header() {
  const {
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
  } = useContext(AppContext);

  const toast = useToast();
  const [isInstalled, setIsInstalled] = useState(false);
  const [existAccount, setExistAccount] = useState(false);
  const [totalSupply, setTotalSupply] = useState("");
  const [tempAccount, setTempAccount] = useState("");

  console.log(pageUser);

  const onClickMetaMask = async () => {
    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        toast({
          title: "MetaMask not installed",
          // description: '추가 정보를 입력해 주세요',

          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      setIsInstalled(true);
    } else {
      setIsInstalled(false);
    }
  }, []);

  useEffect(() => {
    if (account) {
      firestore
        .collection(account)
        .doc("0")
        .get()
        .then((collection) => {
          if (collection.exists) {
            setExistAccount(true);
          } else {
            setExistAccount(false);
            toast({
              title: "회원정보가 존재하지 않아요!",
              description: "회원가입 버튼을 눌러 가입을 먼저 해주세요!",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        })
        .catch((error) => {
          console.error("Error getting document:", error);
        });
    }
  }, [account]);

  const getUsers = async () => {
    if (account !== pageUser) {
      setTempAccount(pageUser);
    } else {
      setTempAccount(account);
    }

    try {
      const response = await NFT_CONTRACT.methods.totalSupply().call();

      setTotalSupply(response);

      console.log(totalSupply);

      const usersCollectionRef = collection(firestore, tempAccount);
      const data = await getDocs(usersCollectionRef);
      const tempUser = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(tempUser);

      setUser({
        name: tempUser[0].name,
        birth: tempUser[0].birth,
        num: tempUser[0].num,
      });

      for (let i = 0; i < totalSupply; i++) {
        presents[i] = [
          {
            giftNum: tempUser[i + 1].giftNum,
            giftName: tempUser[i + 1].giftName,
            giftPrice: tempUser[i + 1].giftPrice,
            giftUrl: tempUser[i + 1].giftUrl,
          },
        ];
      }

      console.log(user);
      console.log(presents);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

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
              src="/images/logo.png"
              width={200}
              height={200}
              alt="main-logo"
            />
          </Link>
        </Box>
        <Spacer />

        <ButtonGroup gap="3">
          <>
            {account ? (
              existAccount ? (
                <>
                  <Modal_Charge
                    account={account}
                    tBalance={tBalance}
                    setTBalance={setTBalance}
                  />
                  <button class="login-button">
                    <span class="text">
                      {account.substring(0, 4) +
                        "-" +
                        account.substring(account.length - 4)}
                    </span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                    <span class="blob"></span>
                  </button>
                  {pathname === "/main" && (
                    <button class="start-button">
                      <Link href={`/user/${account}`}>
                        <span class="text">Get Started</span>
                        <span class="blob"></span>
                        <span class="blob"></span>
                        <span class="blob"></span>
                        <span class="blob"></span>
                      </Link>
                    </button>
                  )}
                  {pathname === `/user/${account}` && (
                    <Modal_AddGift account={account} />
                  )}
                  {pathname === `/user/${pageUser}/present/${1}` && (
                    <button class="start-button">
                      <Link href={`/user/${pageUser}`}>
                        <span class="text">Go Back To List</span>
                        <span class="blob"></span>
                        <span class="blob"></span>
                        <span class="blob"></span>
                        <span class="blob"></span>
                      </Link>
                    </button>
                  )}
                </>
              ) : (
                <>
                  <Modal_SignUp
                    account={account}
                    setExistAccount={setExistAccount}
                  />
                </>
              )
            ) : (
              <button
                class="login-button"
                onClick={onClickMetaMask}
                disabled={!isInstalled}
              >
                <span class="text">Login</span>
                <span class="blob"></span>
                <span class="blob"></span>
                <span class="blob"></span>
                <span class="blob"></span>
              </button>
            )}
          </>
        </ButtonGroup>
      </Flex>
    </>
  );
}
