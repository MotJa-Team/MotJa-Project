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
  Input,
  InputGroup,
} from "@chakra-ui/react";

import { TOKEN_CONTRACT, NFT_CONTRACT } from "@/lib/web3.config";
import { useDisclosure, Button, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/app/layout";
import { Divider } from "@chakra-ui/react";
import React from "react";

const M_Charge = ({ account }) => {
  const { tBalance, setTBalance } = useContext(AppContext);
  const [tokenAmount, setTokenAmount] = useState();

  const getToken = async () => {
    try {
      const response = await TOKEN_CONTRACT.methods.balanceOf(account).call();

      setTBalance(Number(response));
    } catch (error) {
      console.error(error);
    }
  };

  const buyToken = async (e) => {
    try {
      e.preventDefault();

      //   const input = Number((1 / coinPrice) * data.get("amount"));
      //   console.log(input);

      const response = await NFT_CONTRACT.methods.buyCoin(tokenAmount).send({
        from: account,
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  useEffect(() => {
    getToken();
    console.log(tBalance);
  }, []);

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
        <span class="text">{tBalance} CT</span>
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
            <Divider mt="5" colorScheme="teal" />
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
