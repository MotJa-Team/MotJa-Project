"use client";

import {
  ChakraProvider,
  Flex,
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import "../styles/global.css";

export const Intro = ({ pathname, user }) => {
  const currentURL = process.env.NEXT_PUBLIC_URL + pathname.pathname;

  const onClickLink = () => {
    console.log(currentURL);
  };

  return (
    <ChakraProvider>
      <Box class="my-box" zIndex={999}>
        <Flex direction="column" mx="auto" m="40px">
          <Flex gap={10}>
            <Box pos="relative" width="300px" height="300px">
              <Box
                pos="absolute"
                width="300px"
                height="300px"
                borderRadius="50%"
                background="#e0e0e0"
                boxShadow="12px 12px 27px #acacac, -12px -12px 27px #ffffff"
              ></Box>
              {/* <Box
                                top={0}
                                bgColor="purple.500"
                                width="300px"
                                height="300px"
                                borderRadius="full"
                            ></Box> */}
            </Box>

            <Box
              borderRadius="sm"
              ml="10"
              flex="1"
              background="#38383d"
              boxShadow="md"
              _hover={{ background: "#42414d" }}
            >
              <Box p={5}>
                <Heading
                  pb={2}
                  color="#00DDFF"
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  이름
                </Heading>
                <Text mt="5" fontSize={["lg"]}>
                  간략 소개
                </Text>
                <Flex mt="5" color="#00DDFF" fontSize="xl" fontWeight="bold">
                  <Box>등록한 총 선물</Box>
                  <Box>펀딩 완료된 선물 수</Box>
                  <Box>진행중</Box>
                </Flex>

                <Flex justifyContent="flex-end" alignItems="flex-end">
                  <Button
                    mt="30"
                    color="black"
                    bg="#00DDFF"
                    borderRadius="none"
                    mr="10"
                  >
                    프로필 편집
                  </Button>
                  <Button
                    onClick={onClickLink}
                    mr="10"
                    mt="5"
                    color="black"
                    bg="#00DDFF"
                    borderRadius="none"
                  >
                    프로필 공유하기{" "}
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
