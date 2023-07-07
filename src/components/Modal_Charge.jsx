"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  ModalOverlay,
  Button,
  Text,
  ChakraProvider,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NFT_CONTRACT, TOKEN_CONTRACT } from "@/lib/web3.config";

export const Modal_Charge = ({ account, tBalance, setTBalance }) => {
  const [tokenAmount, setTokenAmount] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getToken = async () => {
    try {
      const response = await TOKEN_CONTRACT.methods.balanceOf(account).call();

      setTBalance(Number(response));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToken();
    console.log(tBalance);
  }, [tBalance]);

  const buyToken = async (e) => {
    try {
      e.preventDefault();

      //   const input = Number((1 / coinPrice) * data.get("amount"));
      //   console.log(input);

      await NFT_CONTRACT.methods.buyCoin(tokenAmount).send({
        from: account,
      });

      setTBalance(tBalance + Number(tokenAmount));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ChakraProvider>
      <button
        class="start-button"
        onClick={() => {
          onOpen();
        }}
      >
        <span class="text">{tBalance} CT</span>
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
          <ModalHeader>잔액 충전하기</ModalHeader>
          <ModalCloseButton />
          <ModalBody px="10">
            <Text mt="5">잔액 : {tBalance} CT</Text>

            <InputGroup mt="5">
              <Input
                type="tel"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
                placeholder="구매할 양을 입력하세요."
              />
              <Button
                colorScheme="teal"
                variant="outline"
                ml="5"
                px="5"
                onClick={buyToken}
              >
                토큰 구매하기
              </Button>
            </InputGroup>
          </ModalBody>
          <ModalFooter mb="5">
            <Button onClick={onClose}>닫기</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};
