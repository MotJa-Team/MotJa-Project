"use client";
import Header from "@/components/Header";
import { Flex, Box, Button, useDisclosure } from "@chakra-ui/react";
import GiftCard from "@/components/GiftCard";
import Intro from "@/components/Intro";
import { AppContext } from "../layout";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import "../../styles/global.css";

const MyPage = () => {
    const { account, setAccount } = useContext(AppContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
            {/* <Image
                src="/images/back.png"
                width={5360}
                height={7140}
                alt="main-logo"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    zIndex: -1,
                }}
            /> */}

            <Flex
                // bgColor={"black"}
                // minH="100vh"
                justifyContent="center"
                alignItems="center"
            >
                <Box maxW="8xl" w="100%">
                    <Header /*bgColor={"black"}*/ />
                </Box>
            </Flex>
            <Box
                minH="100vh"
                display="flex"
                flexDirection="row"
                gap={10}
                p="10"
            >
                {/* <Flex class="my-box" w="15%">
                    {/* 왼쪽 메뉴바 구성 
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
                    <Intro />

                    {/* 마지막에 ㄱㄱ */}
                    <Box class="my-box" h="100%">
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
