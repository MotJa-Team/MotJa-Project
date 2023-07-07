"use client";

import { Flex, Box } from "@chakra-ui/react";
import { Text } from "@nextui-org/react";
import { AppContext } from "../layout";
import { useContext } from "react";

const Main = () => {
  const { account, setAccount, pathname } = useContext(AppContext);

  return (
    <>
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <Box minH="100vh" w="100%">
          <Box
            maxW="8xl"
            position="relative"
            zIndex={999}
            alignItems="center"
            justifyContent="center"
            mt="20px"
            mx="auto"
          >
            <Text
              h1
              size={150}
              color="#E6FAFE"
              weight="700"
              class="tracking-in-contract"
            >
              H A P P Y
            </Text>
            <div className="max-width-wrapper">
              <div className="text-container">
                <Text h1 size={150} color="#E6FAFE" weight="700">
                  ㅤ C E L E B D A Y
                </Text>
              </div>
            </div>
          </Box>

          <Box
            maxW="8xl"
            bgColor="red.100"
            position="relative"
            zIndex={999}
            alignItems="center"
            justifyContent="center"
            mt="20px"
            mx="auto"
          >
            안녕 오랜만이야 ~ 여기다 뭘 많이 할거 같기는 해
            <Box>
              그리드 ㄱㄱ일단 일단 써야할 내용 적어넣기 01. NFT 사용하기 02.
              여러명이 돈을모아 등등
            </Box>
          </Box>
        </Box>
      </Flex>
      {/* <Footer /> */}
    </>
  );
};
export default Main;
