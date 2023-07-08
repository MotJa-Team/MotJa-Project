"use client";

import {
  Box,
  Button,
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
  InputRightElement,
  InputGroup,
  useDisclosure,
} from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import "../styles/global.css";

import { useState } from "react";
import { firestore } from "@/firebase";

export const Modal_SignUp = ({ account, setExistAccount }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [metamaskAddress, setMetamaskAddress] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [num, setNum] = useState("");

  ////디비에 정보 푸쉬 ~~~> 여기다 조건 와장창 ㄱㄱ
  const clickSave = () => {
    if (birth.length !== 6 || /\D/.test(birth)) {
      return toast({
        title: "생년월일를 확인해주세요!",
        description: "01년01월01일이라면, 010101 와 같이 작성해주시면 됩니다.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    if (num.length !== 11 || /\D/.test(num)) {
      return toast({
        title: "전화번호를 확인해주세요!",
        description: "전화번호는 '-'문자 없이 11자리 숫자로 입력해야 합니다.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      firestore
        .collection(account)
        .doc("sign-up")
        .set({
          name,
          birth,
          num,
          addr: metamaskAddress,
        })
        .then(() => {
          console.log("Data saved successfully");
          setExistAccount(true);
        })
        .catch((error) => {
          console.error("Error saving data:", error);
        });
    }
  };

  const clickAddrConnect = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setMetamaskAddress(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickCancel = async () => {
    setName("");
    setBirth("");
    setNum("");
    setMetamaskAddress("");
    onClose();
  };

  return (
    <>
      <button class="login-button" onClick={onOpen}>
        <span class="text">Sign up</span>
        <span class="blob"></span>
        <span class="blob"></span>
        <span class="blob"></span>
        <span class="blob"></span>
      </button>
      <Modal size="2xl" isOpen={isOpen} onClose={onClickCancel}>
        <ModalOverlay
          onClick={onClickCancel}
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>✅ 회원가입</ModalHeader>
          <Box mx="auto" w="300px" h="300px">
            <Spline scene="https://prod.spline.design/FY3RUQYLbuAsJ8KJ/scene.splinecode" />
          </Box>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>✨이름</FormLabel>
              <Input
                focusBorderColor="#00ff8c"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 적어주세요"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>✨생년월일</FormLabel>
              <Input
                focusBorderColor="#00ff8c"
                placeholder="생년월일 6자리를 적어주세요"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>✨ 전화번호</FormLabel>
              <Input
                focusBorderColor="#00ff8c"
                placeholder="문자'-'를 제외하고 전화번호를 입력해주세요 "
                value={num}
                onChange={(e) => setNum(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>✨ 메타마스크 주소</FormLabel>
              <InputGroup>
                <Input
                  focusBorderColor="#00ff8c"
                  value={metamaskAddress}
                  onChange={(e) => setMetamaskAddress(e.target.value)}
                />
                <InputRightElement width="fit-content">
                  <Button
                    onClick={clickAddrConnect}
                    colorScheme="teal"
                    variant="ghost"
                  >
                    메타마스크 연결하기
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={clickSave}>
              내마음속에저장
            </Button>
            <Button onClick={onClickCancel}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
