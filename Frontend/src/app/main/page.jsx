"use client";

import { About } from "@/components/About";
import { MainGrid } from "@/components/MainGrid";
import { MainSlide } from "@/components/MainSlide";
import { TeamProfile } from "@/components/TeamProfile";
import { Flex, Box } from "@chakra-ui/react";

const Main = () => {
  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center">
      <Box minH="100vh" w="100%">
        <MainSlide />

        {/* 여기는 그리드 설명+ 지갑설명+ 프로필부분 */}
        <Box
          maxW="6xl"
          minH="100vh"
          position="relative"
          zIndex={999}
          alignItems="center"
          justifyContent="center"
          mt="100px"
          mx="auto"
        >
          <MainGrid />
          <About />
          <TeamProfile />
        </Box>
      </Box>
    </Flex>
  );
};
export default Main;
