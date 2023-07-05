"use client";
import Image from "next/image";
import "../styles/global.css";

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
import "../styles/global.css";

import Preimage from "./preimage";
////////
const Header = ({ account, setAccount, bgColor, showButtons }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [price, setPrice] = useState("");

    //
    const [inputValue, setInputValue] = useState("");
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const ButtonClick = () => {
        if (account) {
            firestore
                .collection("P_MOTZA")
                .doc(account)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        setExistAccount(true);
                    } else {
                        setExistAccount(false);
                        toast({
                            title: "회원정보가dfdsfs 존재하지 않아요!",
                            description:
                                "회원가입 버튼을 눌러 가입을 먼저 해주세요!",
                            status: "error",
                            duration: 9000,
                            isClosable: true,
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error getting document:", error);
                });
        }
    };
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
                                <button
                                    class="start-button"
                                    onClick={ButtonClick}
                                >
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

                            <button class="gift-button" onClick={onOpen}>
                                <span class="text">Add Gift</span>
                                <span class="blob"></span>
                                <span class="blob"></span>
                                <span class="blob"></span>
                                <span class="blob"></span>
                            </button>

                            <Modal
                                size="2xl"
                                // initialFocusRef={initialRef}
                                isOpen={isOpen}
                                onClose={onClose}
                            >
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>👀선물을 등록👀</ModalHeader>
                                    <Box
                                        mx="auto"
                                        w="300px"
                                        h="300px"
                                        sx={{
                                            borderRadius: "50px",
                                            background:
                                                "linear-gradient(145deg, #f0f0f0, #cacaca)",
                                            boxShadow:
                                                "30px 30px 60px #bebebe, -30px -30px 60px #ffffff",
                                        }}
                                    ></Box>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                        <FormControl>
                                            <FormLabel>선물 링크</FormLabel>
                                            <Input
                                                value={inputValue}
                                                onChange={handleChange}
                                                placeholder="https://오늘 3시간동안 나는 무엇을 한 것인가~~~알아맞춰 볼 사람 ~"
                                            />
                                        </FormControl>

                                        <FormControl mt={4}>
                                            <FormLabel>받을 선물 명</FormLabel>
                                            <Input placeholder="아이스크림 사줘~!~!~" />
                                        </FormControl>
                                        <FormControl mt={4}>
                                            <FormLabel>금액</FormLabel>
                                            <Input
                                                placeholder="10000"
                                                value={price}
                                                onChange={(e) =>
                                                    setPrice(e.target.value)
                                                }
                                            />
                                        </FormControl>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme="blue" mr={3}>
                                            내마음속에저장
                                        </Button>
                                        <Button onClick={onClose}>
                                            Cancel
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </>
                    )}
                    {/* 지갑 로그인하는 버튼 생성 */}
                </ButtonGroup>
            </Flex>
        </>
    );
};
export default Header;
