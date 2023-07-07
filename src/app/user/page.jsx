"use client";

import "../../styles/global.css";

import { Flex, Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../layout";

const User = () => {
  const { account, setAccount, pathname } = useContext(AppContext);

  return (
    <>
      {account ? (
        <>
          <Flex minH="100vh" justifyContent="center" alignItems="center">
            <Box zIndex={999}>Hello</Box>
          </Flex>
        </>
      ) : (
        <Flex minH="100vh" justifyContent="center" alignItems="center">
          <Box zIndex={999}>로그인부터 진행</Box>
        </Flex>
      )}
    </>
  );
};

export default User;
