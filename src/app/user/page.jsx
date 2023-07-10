"use client";

import "../../styles/global.css";

import { Text } from "@nextui-org/react";
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
                    <Box
                        justifyContent="center"
                        alignItems="center"
                        display="flex"
                        flexDirection="row"
                        gap={10}
                        maxW="6xl"
                        mt="30px"
                        mx="auto"
                        zIndex={999}
                    >
                        <Flex
                            // bg="red.200"
                            minH="100vh"
                            direction={"column"}
                            gap={10}
                        >
                            <Intro pathname={pathname} user={user} />

                            <Box flex class="my-box" h="100%">
                                <Flex direction="column">
                                    <Flex gap={10}>
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
                <Flex
                    zIndex={1}
                    minH="100vh"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box zIndex={1}>
                        <div className="wrapper" mx="auto">
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                            <div class="shadow"></div>
                            <div class="shadow"></div>
                            <div class="shadow"></div>
                        </div>
                        <Text h1 size={43} color="#E6FAFE" weight="700">
                            Login First
                        </Text>
                    </Box>
                </Flex>
            )}
        </>
    );
};

export default User;
