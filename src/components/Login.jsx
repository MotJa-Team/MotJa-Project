"use client";
import {
  ChakraProvider,
  Box,
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
  InputRightElement,
  useToast,
  InputGroup,
} from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import "../styles/global.css";

import { useState, useEffect } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { firestore } from "../firebase";

const Login = ({ account, setAccount }) => {
  // const [account, setAccount] = useState('');
  const toast = useToast();
  const [metamaskAddress, setMetamaskAddress] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [num, setNum] = useState("");
  const P_MOTZA = firestore.collection("P_MOTZA");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputValue, setInputValue] = useState("");

  // 메타마스크 설치 여부 상태체크
  const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      setIsInstalled(true);
    } else {
      setIsInstalled(false);
    }
  }, []);

  // 디비에 존재 하는지 안하는지 체크
  const [existAccount, setExistAccount] = useState(false);
  useEffect(() => {
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
              title: "회원정보가 존재하지 않아요!",
              description: "회원가입 버튼을 눌러 가입을 먼저 해주세요!",
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
  }, [account]);

  const onClickMetaMask = async () => {
    try {
      // Check if MetaMask is installed
      if (!window.ethereum) {
        toast({
          title: "MetaMask not installed",
          // description: '추가 정보를 입력해 주세요',

          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

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
        .collection("P_MOTZA")
        .doc(metamaskAddress)
        .set({
          name: name,
          birth: birth,
          num: num,
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

  ////
  return (
    <>
      {/*버전1-로그인버튼 account로 대체+지갑로그인 기능만 */}

      {account ? (
        existAccount ? (
          <button class="login-button">
            <span class="text">
              {account.substring(0, 4) +
                "-" +
                account.substring(account.length - 4)}
            </span>
            <span class="blob"></span>
            <span class="blob"></span>
            <span class="blob"></span>
            <span class="blob"></span>
          </button>
        ) : (
          <>
            <button class="login-button" onClick={onOpen}>
              <span class="text">Sign up</span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
              <span class="blob"></span>
            </button>

            <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
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
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      ) : (
        // <Button class="login-button">
        //     onClick={onClickMetaMask}
        //     disabled={!isInstalled}
        //     <span class="text">Login</span>
        //     <span class="blob"></span>
        //     <span class="blob"></span>
        //     <span class="blob"></span>
        //     <span class="blob"></span>
        // </Button>
        <button
          class="login-button"
          onClick={onClickMetaMask}
          disabled={!isInstalled}
          // colorScheme="messenger"
          // variant="outline"
          // borderRadius="9999px"
        >
          <span class="text">Login</span>
          <span class="blob"></span>
          <span class="blob"></span>
          <span class="blob"></span>
          <span class="blob"></span>
        </button>
      )}
    </>
  );
};
export default Login;
