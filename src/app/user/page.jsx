"use client";

import "../../styles/global.css";

import { Flex, Box, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { AppContext } from "../layout";
import { Intro } from "@/components/Intro";
import { PresentCard } from "@/components/PresentCard";

const User = () => {
  const { account, pathname, user, presents } = useContext(AppContext);

  return (
    <>
      {account ? (
        <>
          <Flex
            // bgColor={"black"}
            // minH="100vh"
            justifyContent="center"
            alignItems="center"
            maxW="8xl"
            position="relative"
            zIndex={999}
            mt="20px"
            mx="auto"
          >
            {/* </Box> */}
          </Flex>
          <Box
            justifyContent="center"
            alignItems="center"
            minH="100vh"
            display="flex"
            flexDirection="row"
            gap={10}
            p="10"
            // zIndex={999}
            mt="20px"
            mx="auto"
          >
            {/* <Flex class="my-box" w="15%">
                     왼쪽 메뉴바 구성 
                    <Box w="90%" mx="auto" m="20px">
                        <Box class="input-box" h="200px" mb="10px">
                            💡Detail
                        </Box>
                        <Box class="input-box" h="80px">
                            ✨come with friend
                        </Box>
                    </Box>
                </Flex> */}

            {/* 오른쪽 컴포넌트 만들기 시작 */}
            <Flex maxW="8xl" minH="100vh" direction={"column"} gap={10}>
              {/* 프로필을 담아줄것이다*/}
              <Intro pathname={pathname} user={user} />

              {/* 마지막에 ㄱㄱ */}
              <Box flex class="my-box" h="100%">
                <Flex direction="column">
                  <Flex m="40px" gap={10}>
                    <PresentCard presents={presents} />
                    <PresentCard presents={presents} />
                    <PresentCard presents={presents} />
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
      ) : (
        <Flex minH="100vh" justifyContent="center" alignItems="center">
          <Box zIndex={1}>로그인부터 진행</Box>
        </Flex>
      )}
    </>
  );
};

export default User;
