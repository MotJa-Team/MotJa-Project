"use client";

import Link from "next/link";
import { Flex, Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import SlideBox from "@/components/SlideBox";
import { useEffect, useContext } from "react";
import { AppContext } from "../layout";
import Preimage from "@/components/preimage";
import Spline from "@splinetool/react-spline";
import { Text } from "@nextui-org/react";
import FButton from "@/components/FButton";

const Main = () => {
    const { account, setAccount } = useContext(AppContext);
    useEffect(() => {
        console.log(account);
    }, [account]);
    return (
        <Flex
            // bgColor={"black"}
            minH="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Box minH="100vh" w="100%">
                {/* 헤더 붙이기 */}
                <Box>
                    <Link href="/main">
                        <Header
                            style={{ position: "fixed" }}
                            account={account}
                            setAccount={setAccount}
                            // bgColor={"black"}
                            showButtons={true}
                        />
                    </Link>
                </Box>

                {/* 중간 슬라이드 or 이미지 부분  */}
                <Flex flexWrap="wrap">
                    {/* <Spline
                        style={{
                            position: "absolute",
                            top: 0, // Change this line
                            left: 0, // Change this line
                            right: 0, // Change this line
                            bottom: 0, // Change this line
                        }}
                        scene="https://prod.spline.design/pWHUeuuxFRItopmZ/scene.splinecode"
                    /> */}
                </Flex>

                <Box
                    maxW="8xl"
                    // bgColor="red.100"
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
                        그리드 ㄱㄱ일단 일단 써야할 내용 적어넣기 01. NFT
                        사용하기 02. 여러명이 돈을모아 등등
                    </Box>
                    <FButton />
                </Box>

                {/* 포토 카드 + 설명 등등 ~> 아무래도 서비스에 관련된 설명을 넣는게 좋지 않을까?*/}
            </Box>
            {/* <Preimage /> */}
        </Flex>
    );
};
export default Main;
