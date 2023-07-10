"use client";
import { ChakraProvider, Flex, Box, Button, Image } from "@chakra-ui/react";
import { TbSend } from "react-icons/tb";

import { Progress, Grid } from "@nextui-org/react";
import Spline from "@splinetool/react-spline";
import { Text } from "@nextui-org/react";
import M_Gift from "./M_Gift";

const Detail = () => {
    return (
        <ChakraProvider>
            <Flex
                maxW="6xl"
                minH="100vh"
                direction={"column"}
                gap={10}
                mx="auto"
                mt={20}
            >
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
                <Box
                    // class="my-box"
                    zIndex={999}
                    borderRadius="25px"
                    bg="rgba(194, 207, 255, 0.5)"
                    boxShadow="5px 5px 10px #bdcdd0,
                                -5px -5px 10px #ffffff"
                >
                    <Flex direction="column" mx="auto" m="40px">
                        <Flex gap={20}>
                            <Box pos="relative" width="500px" height="500px">
                                <Box
                                    pos="absolute"
                                    width="500px"
                                    height="500px"
                                    borderRadius="25px"
                                    background="#e6fafe"
                                    boxShadow="5px 5px 10px #bdcdd0,
                                -5px -5px 10px #ffffff"
                                >
                                    <Image src="/images/nft.png" alt="nft" />
                                </Box>
                            </Box>

                            <Box flex="1">
                                <Box mb={20}>
                                    <Text
                                        h1
                                        size={50}
                                        color="white"
                                        weight="700"
                                    >
                                        GiftName
                                    </Text>
                                    <Text
                                        h1
                                        size={30}
                                        color="white"
                                        weight="700"
                                    >
                                        ㅤ: 하겐다즈 아이스크림바
                                    </Text>
                                    <Text
                                        h1
                                        size={50}
                                        color="white"
                                        weight="700"
                                    >
                                        GiftPrice
                                    </Text>
                                    <Text
                                        h1
                                        size={30}
                                        color="white"
                                        weight="700"
                                    >
                                        ㅤ: 3000원
                                    </Text>
                                    <Text
                                        h1
                                        size={20}
                                        color="white"
                                        weight="700"
                                    >
                                        ㅤby ADDR :
                                    </Text>{" "}
                                </Box>

                                <Flex
                                    justifyContent="flex-end"
                                    alignItems="flex-end"
                                    gap={4}
                                    mb={10}
                                >
                                    <button class="send-button">
                                        <div class="svg-wrapper-1">
                                            <div class="svg-wrapper">
                                                <div class="svg">
                                                    <TbSend />
                                                </div>
                                            </div>
                                        </div>
                                        <span>선물링크공유</span>
                                    </button>

                                    <M_Gift />
                                </Flex>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>

                {/* ////////////////////////// */}
                <Box
                    zIndex={999}
                    borderRadius="25px"
                    bg="rgba(194, 207, 255, 0.5)"
                    boxShadow="5px 5px 10px #bdcdd0,
                                -5px -5px 10px #ffffff"
                    mt={15}
                >
                    <Box m="40px">
                        <Text h1 size={30} color="white" weight="700">
                            Charged amount status
                        </Text>
                        <Grid.Container xs={20} sm={12} gap={2}>
                            <Grid>
                                <Progress
                                    color="gradient"
                                    size="xl"
                                    value={78}
                                />
                            </Grid>
                        </Grid.Container>
                        <Flex
                            justifyContent="flex-end"
                            alignItems="flex-end"
                            gap={10}
                        >
                            <button class="button-mint" mt="50" mr="10">
                                Minting
                            </button>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </ChakraProvider>
    );
};

export default Detail;
