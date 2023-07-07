"use client";
import Image from "next/image";

import {
    ChakraProvider,
    Flex,
    Box,
    Heading,
    Spacer,
    ButtonGroup,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import Login from "./login";
import Link from "next/link";
import { useState } from "react";

import Preimage from "./GiftPreImg";
import M_AddGift from "./M_AddGift";
////////
const Header = ({ account, setAccount, bgColor, showButtons }) => {
    //

    return (
        <>
            <Flex
                alignItems="center"
                justifyContent="center"
                mx="auto"
                mt="20px"
                gap="2"
                maxW="5xl"
                w="100%"
                //
                backgroundColor="rgba(0, 0, 0, 0.7)"
                boxShadow="0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15)"
                padding="0.75rem"
                borderRadius="99px"
                position="relative"
                zIndex={999}
            >
                <Box w="20%" my-auto>
                    <Link href="/main">
                        <Image
                            src="/images/logo.png"
                            width={200}
                            height={200}
                            alt="main-logo"
                        />
                    </Link>
                </Box>
                <Spacer />

                <ButtonGroup gap="3">
                    {showButtons ? (
                        <>
                            <Login account={account} setAccount={setAccount} />
                            <Link href="/mypage">
                                {/* <Button colorScheme="cyan" variant="outline">
                                    Get Started
                                </Button> */}
                                <button class="start-button">
                                    <span class="text">Get Started</span>
                                    <span class="blob"></span>
                                    <span class="blob"></span>
                                    <span class="blob"></span>
                                    <span class="blob"></span>
                                </button>
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* <Button
                                colorScheme="cyan"
                                variant="outline"
                                onClick={onOpen}
                            >
                                선물등록하기
                               
                            </Button> */}

                            <M_AddGift
                                account={account}
                                setAccount={setAccount}
                            />
                        </>
                    )}
                    {/* 지갑 로그인하는 버튼 생성 */}
                </ButtonGroup>
            </Flex>
        </>
    );
};
export default Header;
