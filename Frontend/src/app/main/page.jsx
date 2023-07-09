"use client";

import { Flex, Box } from "@chakra-ui/react";
import { Text } from "@nextui-org/react";

const Main = () => {
  return (
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
          <div className="max-width-wrapper">
            <div className="text-container">
              <Text
                h1
                size={150}
                color="#E6FAFE"
                weight="700"
                class="tracking-in-contract"
              >
                H A P P Y
              </Text>
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
          <div>
            <h1>Title</h1>
            <div>Description</div>
          </div>
        </Box>
      </Box>
    </Flex>
  );
};
export default Main;
