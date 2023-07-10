// 모달 - 선물하기

"use client";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ChakraProvider,
    Image,
    Input,
    InputGroup,
    InputLeftAddon,
} from "@chakra-ui/react";
import { firestore } from "../app/firebase";

import { useDisclosure, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsGiftFill } from "react-icons/bs";
const M_Gift = () => {
    const OverlayOne = () => (
        <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
        />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState(<OverlayOne />);
    const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

    return (
        <ChakraProvider>
            <button class="send-button">
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                        <div class="svg">
                            <BsGiftFill />
                        </div>
                    </div>
                </div>
                <span>선물하기</span>
            </button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>친구에게 선물하기</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody px="10">
                        <Image
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Green double couch with wooden legs"
                            borderRadius="lg"
                            p="10"
                        />
                        <InputGroup mt="5">
                            <InputLeftAddon
                                width="20"
                                p="auto"
                                // children="이름"
                            />
                            <Input
                                type="tel"
                                placeholder="이름을 입력하세요."
                            />
                        </InputGroup>
                        <InputGroup mt="5">
                            <InputLeftAddon width="20" />
                            <Input
                                type="tel"
                                placeholder="선물할 금액을 입력하세요."
                            />
                        </InputGroup>
                    </ModalBody>
                    <ModalFooter mb="5">
                        <Button onClick={onClose}>닫기</Button>
                        <Button ml="5">선물하기</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </ChakraProvider>
    );
};

export default M_Gift;
