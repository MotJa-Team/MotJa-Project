// 모달 - 토큰 충전하기

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
  Container,
} from "@chakra-ui/react";

import { useDisclosure, Button, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";

const M_Charge = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  return (
    <ChakraProvider>
      <button
        class="start-button"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        <span class="text">Get Started</span>
        <span class="blob"></span>
        <span class="blob"></span>
        <span class="blob"></span>
        <span class="blob"></span>
      </button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>잔액 충전하기</ModalHeader>
          <ModalCloseButton />
          <ModalBody px="10">
            <Text mt="5">잔액 : </Text>
            <InputGroup mt="5">
              <Input type="tel" placeholder="구매할 양을 입력하세요." />
              <Button colorScheme="teal" variant="outline" ml="5" px="5">
                토큰 구매하기
              </Button>
            </InputGroup>
            <Divider mt="5" colorScheme="teal" />
            <Flex direction="column">
              <Flex alignItems="center" mt="5">
                <Button colorScheme="teal" variant="outline" mr="5">
                  토큰 조회하기
                </Button>
                <Text>???</Text>
              </Flex>
              <Flex alignItems="center" mt="5">
                <Button colorScheme="teal" variant="outline" mr="5">
                  환율 조회하기
                </Button>
                <Text>???</Text>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter mb="5">
            <Button onClick={onClose}>닫기</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default M_Charge;
