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
} from '@chakra-ui/react';
import Login from './login';
import LoginD from '../pages/LoginD';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Header = ({ account, setAccount, bgColor, showButtons }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //
  const [inputValue, setInputValue] = useState('');
  const handleChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <ChakraProvider>
      <Flex alignItems="center" gap="2" maxW="8xl" w="100%" bgColor={bgColor}>
        <Box p="2" w="20%">
          <Link to="/main">
            <Heading size="md">
              <img
                size="200px"
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="main-logo"
              ></img>
            </Heading>
          </Link>
        </Box>
        <Spacer />
        <ButtonGroup gap="3">
          {showButtons ? (
            <>
              <Login account={account} setAccount={setAccount} />
              <Link to="/mypage">
                <Button colorScheme="cyan" variant="outline">
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Button colorScheme="cyan" variant="outline" onClick={onOpen}>
                선물등록하기
                {/* <RG /> */}
              </Button>

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
                      borderRadius: '50px',
                      background: 'linear-gradient(145deg, #f0f0f0, #cacaca)',
                      boxShadow:
                        '30px 30px 60px #bebebe, -30px -30px 60px #ffffff',
                    }}
                  >
                    {' 여기에 이미지가 뜨도록 하고 싶은데/..'}
                    <Helmet>
                      <meta property="og:image" content="{inputValue}" />
                    </Helmet>
                    <img src={inputValue} alt="gift-image" />
                  </Box>
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
                      <Input placeholder="10000" />
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
            </>
          )}
          {/* 지갑 로그인하는 버튼 생성 */}
        </ButtonGroup>
      </Flex>
    </ChakraProvider>
  );
};
export default Header;
