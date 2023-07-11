"use client";

import { ChakraProvider, Flex, Box, Button } from "@chakra-ui/react";
import { Text } from "@nextui-org/react";
import { MdDownload } from "react-icons/md";
import { GrEdit } from "react-icons/gr";

export const Intro = ({ pathname, user, pageUser, account }) => {
  const currentURL = process.env.NEXT_PUBLIC_URL + pathname;

  const onClickLink = () => {
    console.log(currentURL);
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
                {" "}
                프로필 넣는 부분{" "}
              </Box>
            </Box>

            <Box flex="1">
              <Text h1 size={30} color="white" weight="700">
                Account : {pageUser}
              </Text>
              <Text h1 size={20} color="white" weight="700">
                🎉 Welcome 🎉
              </Text>

              <Box p={5}>
                <Flex mt="5" color="#00DDFF" fontSize="xl" fontWeight="bold">
                  <Box>등록한 총 선물</Box>
                  <Box>펀딩 완료된 선물 수</Box>
                  <Box>진행중</Box>
                </Flex>

                <Flex justifyContent="flex-end" alignItems="flex-end" gap={4}>
                  <Text h1 size={20} color="white" weight="700" pr={10}>
                    Edit Profile
                  </Text>
                  <Button class="Btn" onClick={onClickLink}>
                    <GrEdit class="svgIcon" background="white" />
                    <span class="icon2"></span>
                  </Button>

                  <Text h1 size={20} color="white" weight="700" pr={10}>
                    Share Link
                  </Text>
                  <Button class="Btn" onClick={onClickLink}>
                    <MdDownload class="svgIcon" />
                    <span class="icon2"></span>
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
