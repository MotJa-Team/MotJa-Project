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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NFT_CONTRACT, TOKEN_CONTRACT } from "@/lib/web3.config";

export const Modal_Present = ({
  account,
  tBalance,
  setTBalance,
  pageUser,
  presentNum,
  isOpen,
  onClose,
}) => {
  const [chargePrice, setChargePrice] = useState();

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
  }, [tBalance]);

  const chargePresent = async (e) => {
    try {
      e.preventDefault();

      await NFT_CONTRACT.methods
        .chargeBalance(pageUser, presentNum, chargePrice)
        .send({
          from: account,
        });
    } catch (error) {
      console.error(error);
    }
  };

  const onClickCancel = async () => {
    setChargePrice("");
    onClose();
  };

  return (
    <ChakraProvider>
      <Modal isCentered isOpen={isOpen} onClose={onClickCancel}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>선물 충전하기</ModalHeader>
          <ModalCloseButton />
          <ModalBody px="10">
            <Text mt="5">✨보유 잔액 : {tBalance} CT</Text>

            <InputGroup mt="5">
              <Input
                type="number"
                value={chargePrice}
                onChange={(e) => setChargePrice(e.target.value)}
                placeholder="선물할 양을 입력하세요."
              />
              <Button
                colorScheme="teal"
                variant="outline"
                ml="5"
                px="5"
                onClick={chargePresent}
              >
                선물하기
              </Button>
            </InputGroup>
          </ModalBody>
          <ModalFooter mb="5">
            <Button onClick={onClickCancel}>닫기</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};
