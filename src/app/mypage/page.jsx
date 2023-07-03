"use client";
import Header from "@/components/Header";
import { Flex, Box, Button, useDisclosure } from "@chakra-ui/react";
import GiftCard from "@/components/GiftCard";
import Intro from "@/components/Intro";
import { AppContext } from "../layout";
import React, { useContext, useEffect } from "react";

const MyPage = () => {
    const { account, setAccount } = useContext(AppContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            <Flex
                bgColor={"black"}
                // minH="100vh"
                justifyContent="center"
                alignItems="center"
            >
                <Box maxW="8xl" w="100%">
                    <Header bgColor={"black"} />
                </Box>
            </Flex>
            <Box
                bgColor="yellow.100"
                minH="100vh"
                display="flex"
                flexDirection="row"
                gap={10}
                p="10"
            >
                {/* 왼쪽 메뉴바 구성 */}
                <Flex bgColor="red.100" w="15%">
                    <Box
                        minH="100vh"
                        w="90%"
                        mx="auto"
                        m="20px"
                        bgColor="gray.100"
                    >
                        <Box bgColor="green.200" h="80px" mb="20px">
                            프로필 넣는 부분
                        </Box>
                        <Box bgColor="green.300" h="80px">
                            자세한 설명/ 친구 목록
                        </Box>
                    </Box>
                </Flex>

                {/* 오른쪽 컴포넌트 만들기 시작 */}
                <Flex w="85%" minH="100vh" direction={"column"} gap={10}>
                    {/* 프로필을 담아줄것이다*/}
                    <Intro />

                    {/* 마지막에 ㄱㄱ */}
                    <Box bgColor="blue.300" h="100%">
                        <Flex m="40px" bgColor="purple.200" gap={20}>
                            <GiftCard />
                            <GiftCard />
                            <GiftCard />
                            <Button px="30px">더보기</Button>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default MyPage;
