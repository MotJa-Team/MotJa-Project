import Header from '../components/header';
// import Header from '..//Header';
import {
  ChakraProvider,
  Flex,
  Box,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';
import GiftCard from '../components/giftCard';
import Intro from '../components/intro';
import GiftCardsBox from '../components/GiftCardsBox';

/*web3 연결하는 부분 == web3.config.js */
// import Web3 from 'web3';
// import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../web3.config';
// const web3 = new Web3(window.ethereum);
// const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
// console.log(contract); //내가 만든 함수들이 보여야 함
/* */

const MyPage = ({ account, setAccount }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  /* 함수 연결할 경우 사용할 부분 

  const get(컨트렉트에 저장한 함수명) = async () => {
    try {
      const (컨트렉트에 저장한 함수명 )  

    } catch (error){
      console.log(error);
    }
  }
*/
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <ChakraProvider>
      <Flex
        bgColor={'black'}
        // minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box maxW="8xl" w="100%">
          <Header bgColor={'black'} />
        </Box>
      </Flex>
      <Box
        bgColor="yellow.100"
        minH="100vh"
        display="flex"
        flexDirection="row"
        gap={10}
        p="10"
      >
        {/* 왼쪽 메뉴바 구성 */}
        <Flex bgColor="red.100" w="15%">
          <Box minH="100vh" w="90%" mx="auto" m="20px" bgColor="gray.100">
            <Box bgColor="green.200" h="80px" mb="20px">
              프로필 넣는 부분
            </Box>
            <Box bgColor="green.300" h="80px">
              자세한 설명/ 친구 목록
            </Box>
          </Box>
        </Flex>

        {/* 오른쪽 컴포넌트 만들기 시작 */}
        <Flex direction="column" w="85%" minH="100vh" gap={10}>
          Parent Component
          {/* <Intro /> */}
          {isClicked ? <Intro /> : null}
          <Button px="30px" onClick={handleClick}>
            더보기
          </Button>
          <GiftCardsBox />
        </Flex>

        {/* 온클릭 시 인트로jsx 없애고 Box를 위로 올리면서 GiftCard가 3x3정도로 보이게끔 
        3항연산자? ...
        음..........
        {더보기 버튼 클릭 ? 인트로 없애고 Box위로 올리고 GIftCard 보임 ? 인트로 있고 Box 있고 GiftCard 3개만 보임}
        */}
      </Box>
    </ChakraProvider>
  );
};

export default MyPage;
