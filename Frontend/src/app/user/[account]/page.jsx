"use client";

import { Flex, Box, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useContext, useEffect } from "react";
import { AppContext } from "../../layout";
import { Intro } from "@/components/Intro";
import { PresentCard } from "@/components/PresentCard";
import { NFT_CONTRACT } from "@/lib/web3.config";

const User = () => {
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
    chargeRatio,
    setChargeRatio,
  } = useContext(AppContext);

  const getChargeRatio = async () => {
    try {
      const response = await NFT_CONTRACT.methods
        .getChargeRatio(pageUser, presentNum)
        .call();

      setChargeRatio(Number(response));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getChargeRatio();
  }, [presentNum]);

  useEffect(() => {
    setPageUser(pathname.substring(6, pathname.legnth));
  }, []);

  return (
    <>
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="row"
        gap={10}
        maxW="6xl"
        mt="30px"
        mx="auto"
        zIndex={999}
      >
        <Flex
          // bg="red.200"
          minH="100vh"
          direction={"column"}
          gap={10}
        >
          <Intro
            pathname={pathname}
            user={user}
            pageUser={pageUser}
            account={account}
          />

          <Box flex class="my-box" h="100%">
            <Flex direction="column">
              <Flex m="40px" gap={10}>
                <PresentCard
                  presents={presents}
                  pageUser={pageUser}
                  presentNum={presentNum}
                  setPresentNum={setPresentNum}
                  chargeRatio={chargeRatio}
                />
                <PresentCard
                  presents={presents}
                  pageUser={pageUser}
                  presentNum={presentNum}
                  setPresentNum={setPresentNum}
                  chargeRatio={chargeRatio}
                />
                <PresentCard
                  presents={presents}
                  pageUser={pageUser}
                  presentNum={presentNum}
                  setPresentNum={setPresentNum}
                  chargeRatio={chargeRatio}
                />
              </Flex>
              <Button
                justifyContent="center"
                mx="auto"
                mb="10"
                leftIcon={<ChevronDownIcon />}
              ></Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default User;
