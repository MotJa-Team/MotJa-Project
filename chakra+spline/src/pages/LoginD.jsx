import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Input,
  InputRightElement,
  Button,
  Flex,
  Box,
  Stack,
  InputGroup,
} from '@chakra-ui/react';
import Spline from '@splinetool/react-spline';

import Header from '../components/header';
import MainCard from '../components/mainCard';

const LoginD = ({ bgColor }) => {
  const [account, setAccount] = useState('');
  const [metamaskAddress, setMetamaskAddress] = useState('');

  // useEffect(() => {
  //   const fetchMetamaskAddress = async () => {
  //     try {
  //       const accounts = await window.ethereum.request({
  //         method: 'eth_requestAccounts',
  //       });
  //       setMetamaskAddress(accounts[0]);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchMetamaskAddress();
  // }, []);

  const handleSignUp = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setMetamaskAddress(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ChakraProvider>
      <Flex
        bgColor={'black'}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box p="2" maxW="7xl" w="100%">
          <Header bgColor={bgColor} />
        </Box>
        <Box minH="100vh" maxW="7xl" w="100%">
          <Spline scene="https://prod.spline.design/FY3RUQYLbuAsJ8KJ/scene.splinecode" />
          <Box
            textColor="green.100"
            paddingLeft="200"
            paddingRight="200"
            paddingBottom="200"
            //
            // maxW="7xl"
            w="100%"
          >
            <Box>
              이름
              <Input
                placeholder="이름을 적어주세요"
                focusBorderColor="#00ff8c"
                _placeholder={{ opacity: 1, color: 'gray.500' }}
              />
            </Box>
            <Box>
              생년월일
              <Input
                focusBorderColor="#00ff8c"
                placeholder="생년월일 6글자를 적어주세요"
                size="md"
              />
            </Box>
            <Box>
              전화번호
              <Input focusBorderColor="#00ff8c" placeholder="010-0000-0000" />
            </Box>
            <Box>
              메타마스크 주소
              <InputGroup>
                <Input
                  focusBorderColor="#00ff8c"
                  placeholder={metamaskAddress}
                />
                <InputRightElement width="fit-content">
                  <Button
                    onClick={handleSignUp}
                    colorScheme="teal"
                    variant="ghost"
                  >
                    메타마스크 연결하기
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default LoginD;
