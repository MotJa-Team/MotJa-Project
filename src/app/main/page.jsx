"use client";

import Link from "next/link";
import { Flex, Box, Grid, GridItem, Image, Button } from "@chakra-ui/react";
import Header from "@/components/Header";
import SlideBox from "@/components/SlideBox";
import { useEffect, useContext } from "react";
import { AppContext } from "../layout";
import Spline from "@splinetool/react-spline";
import { Text } from "@nextui-org/react";

import GiftPreImg from "@/components/GiftPreImg";
import ProfileCard from "@/components/ProfileCard";
import ProfileCardD from "@/components/ProfileCardD";
import MainGrid from "@/components/MainGrid";
import MainSlide from "@/components/MainSlide";

const Main = () => {
    const { account, setAccount } = useContext(AppContext);
    useEffect(() => {
        console.log(account);
    }, [account]);
    return (
        <Flex
            // bg={"black"}
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
                            // bg={"black"}
                            showButtons={true}
                        />
                    </Link>
                </Box>

                {/* 중간 슬라이드 or 이미지 부분  */}
                <Flex flexWrap="wrap">
                    <Spline
                        style={{
                            position: "absolute",
                            top: 0, // Change this line
                            left: 0, // Change this line
                            right: 0, // Change this line
                            bottom: 0, // Change this line
                        }}
                        scene="https://prod.spline.design/pWHUeuuxFRItopmZ/scene.splinecode"
                    />
                </Flex>
                {/* main글씨 시작 */}
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

                    {/* ///여기서부터 상세 설명 파트 /// */}
                    <Box mt="100px">
                        <Text h1 size={80} color="#E6FAFE" weight="700">
                            About
                        </Text>
                        <Box>결제방법 ?</Box>
                    </Box>

                    {/* ///여기서부터 프로필 파트 /// */}
                    <ProfileCardD />
                </Box>
            </Box>
            {/* <GiftPreImg /> */}
            {/* <ProfileImg /> */}
        </Flex>
    );
};
export default Main;
