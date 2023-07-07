// 모달 - 상품 등록
"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  Box,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ChakraProvider,
  useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";

export const Modal_AddGift = () => {
  const [price, setPrice] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <button
        class="gift-button"
        onClick={() => {
          onOpen();
        }}
      >
        <span class="text">Add Gift</span>
        <span class="blob"></span>
        <span class="blob"></span>
        <span class="blob"></span>
        <span class="blob"></span>
      </button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>👀선물을 등록👀</ModalHeader>
          <Box
            mx="auto"
            w="300px"
            h="300px"
            sx={{
              borderRadius: "50px",
              background: "linear-gradient(145deg, #f0f0f0, #cacaca)",
              boxShadow: "30px 30px 60px #bebebe, -30px -30px 60px #ffffff",
            }}
          ></Box>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>선물 링크</FormLabel>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
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
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              내마음속에저장
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};
