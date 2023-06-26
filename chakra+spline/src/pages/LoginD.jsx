import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
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
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [num, setNum] = useState('');
  const P_MOTZA = firestore.collection('P_MOTZA');
  //TEST용//////////////////////

  useEffect(() => {
    // bucket이라는 변수로 firestore의 collection인 bucket에 접근

    // collection의 document인 "bucket_item"을 가져온다.
    P_MOTZA.doc('0xd7ed3d7bb6d9c86f05de9d2762219f52552b4f75')
      .get()
      .then(doc => {
        // document의 데이터를 가져옴
        console.log(doc.data());
        // document의 id를 가져옴
        // console.log(doc.id);
      });
  }, []);

  ////////////////////////////

  const clickSave = () => {
    firestore
      .collection('P_MOTZA')
      .doc(metamaskAddress)
      .set({
        name: name,
        birth: birth,
        num: num,
        addr: metamaskAddress,
      })
      .then(() => {
        console.log('Data saved successfully');
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  const clickAddrConnect = async () => {
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
          <Header bgColor={bgColor} showButtons={false} />
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
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Box>
            <Box>
              생년월일
              <Input
                focusBorderColor="#00ff8c"
                placeholder="생년월일 6글자를 적어주세요"
                size="md"
                value={birth}
                onChange={e => setBirth(e.target.value)}
              />
            </Box>
            <Box>
              전화번호
              <Input
                focusBorderColor="#00ff8c"
                placeholder="010-0000-0000"
                value={num}
                onChange={e => setNum(e.target.value)}
              />
            </Box>
            <Box>
              메타마스크 주소
              <InputGroup>
                <Input
                  focusBorderColor="#00ff8c"
                  value={metamaskAddress}
                  onChange={e => setMetamaskAddress(e.target.value)}
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
            </Box>
            <Button onClick={clickSave}>save</Button>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default LoginD;
