"use client";

import { ChakraProvider, Flex, Box, Image } from "@chakra-ui/react";
import { Text } from "@nextui-org/react";
import { MdDownload } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export const Intro = ({ pathname, user, pageUser, account }) => {
  const ranNum = Math.floor(Math.random() * 50) + 1;
  // const currentURL = process.env.NEXT_PUBLIC_URL + pathname;

  const handleCopyClipBoard = async () => {
    try {
      console.log(currentURL);
      await navigator.clipboard.writeText(
        process.env.NEXT_PUBLIC_URL + pathname
      );
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ChakraProvider>
      <Box
        zIndex={999}
        borderRadius="25px"
        bg="rgba(194, 207, 255, 0.5)"
        boxShadow="5px 5px 10px #bdcdd0,
                                -5px -5px 10px #ffffff"
      >
        <Flex direction="column" mx="auto" m="40px">
          <Flex gap={10}>
            <Box pos="relative" width="300px" height="300px">
              <Box
                pos="absolute"
                width="300px"
                height="300px"
                borderRadius="25px"
                background="#e6fafe"
                boxShadow="5px 5px 10px #bdcdd0,
                                -5px -5px 10px #ffffff"
              >
                <Image
                  borderRadius={25}
                  src={`https://olbm.mypinata.cloud/ipfs/QmaHqh8ERAekGsZENes6weNQSaRA6Y4mPiowHBAuMEiCo1/${ranNum}.png`}
                />
              </Box>
            </Box>

            <Box flex="1">
              <Text h1 size={20} color="white" weight="700">
                Welcome 🎉
              </Text>
              <Text h1 size={30} color="white" weight="700">
                {user[0]?.name}
              </Text>
              <Text h1 size={30} color="white" weight="700">
                {pageUser}
              </Text>

              <Box p={5}>
                {/* <Flex mt="5" color="#00DDFF" fontSize="xl" fontWeight="bold">
                  <Box>등록한 총 선물</Box>
                  <Box>펀딩 완료된 선물 수</Box>
                  <Box>진행중</Box>
                </Flex> */}

                <Flex justifyContent="flex-end" alignItems="flex-end" gap={4}>
                  {pageUser === account && (
                    <button class="send-button">
                      <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                          <div class="svg">
                            <CgProfile />
                          </div>
                        </div>
                      </div>
                      <span>Edit Profile</span>
                    </button>
                  )}

                  <button onClick={handleCopyClipBoard} class="send-button">
                    <div class="svg-wrapper-1">
                      <div class="svg-wrapper">
                        <div class="svg">
                          <MdDownload />
                        </div>
                      </div>
                    </div>
                    <span>Share Link</span>
                  </button>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
