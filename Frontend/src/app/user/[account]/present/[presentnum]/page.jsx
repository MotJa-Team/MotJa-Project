"use client";

import { PresentDetail } from "@/components/PresentDetail";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../layout";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@nextui-org/react";

const Present = () => {
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
  const [presentInfo, setPresentInfo] = useState();

  useEffect(() => {
    setPageUser(pathname.substring(6, 48));
    // console.log(pageUser);
    // console.log(typeof pageUser);
    setPresentNum(pathname.substring(57, pathname.length));
    // console.log(presentNum);
    // console.log(typeof presentNum);
  }, []);

  useEffect(() => {
    // setPresentNum(Number(pathname.substring(57, pathname.legnth)));
    setPresentInfo(presents[presentNum - 1]);
  }, [presents]);

  return (
    <>
      {presentInfo ? (
        <PresentDetail
          pathname={pathname}
          account={account}
          pageUser={pageUser}
          user={user}
          presents={presents}
          presentNum={presentNum}
          setPresentNum={setPresentNum}
          presentInfo={presentInfo}
          chargeRatio={chargeRatio}
          setChargeRatio={setChargeRatio}
          tBalance={tBalance}
          setTBalance={setTBalance}
        />
      ) : (
        <Flex
          zIndex={1}
          minH="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <Box zIndex={1}>
            <div className="wrapper" mx="auto">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="shadow"></div>
              <div class="shadow"></div>
              <div class="shadow"></div>
            </div>
            <Text h1 size={43} color="#E6FAFE" weight="700">
              Loading
            </Text>
          </Box>
        </Flex>
      )}
    </>
  );
};
export default Present;
