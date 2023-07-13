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
import { NFT_CONTRACT, TOKEN_CONTRACT, web3 } from "@/lib/web3.config";
import axios from "axios";

export const Modal_Charge = ({ account, tBalance, setTBalance }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tokenAmount, setTokenAmount] = useState();
  const [coinPrice, setCoinPrice] = useState();

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

  const buyToken = async (e) => {
    try {
      e.preventDefault();

      const input = Number((1 / coinPrice) * tokenAmount);
      const value = web3.utils.toWei(input, "ether");

      await NFT_CONTRACT.methods.buyCoin(tokenAmount).send({
        from: account,
        value,
      });

      setTBalance(tBalance + Number(tokenAmount));
      onClickCancel();
    } catch (error) {
      console.error(error);
    }
  };

  const onClickCancel = () => {
    setTokenAmount("");
    onClose();
  };

  const getCoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH,%20KRW-MATIC"
      );

      // setCoinPrice([
      //   { symbol: "MATIC", price: response.data[2].trade_price }
      // ]);

      // console.log(response.data);
      // console.log(response.data[0].trade_price);
      setCoinPrice(response.data[0].trade_price);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoinPrice();
  }, []);

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
      <Modal isCentered isOpen={isOpen} onClose={onClickCancel}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>잔액 충전하기</ModalHeader>
          <ModalCloseButton />
          <ModalBody px="10">
            <Text mt="5">✨보유 잔액 : {tBalance} CT</Text>
            <Text mt="5">✨1 토큰당 가격 : {(1 / coinPrice).toFixed(10)}</Text>
            <InputGroup mt="5">
              <Input
                type="number"
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
            <Button onClick={onClickCancel}>닫기</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};
