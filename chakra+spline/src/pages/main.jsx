import { Link } from 'react-router-dom';
import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import Header from '../components/header';
import SlideBox from '../components/mainslide';
import MainCard from '../components/mainCard';
const Main = ({ account, setAccount, bgColor }) => {
  return (
    <ChakraProvider>
      <Flex
        bgColor={'black'}
        minH="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box minH="100vh" maxW="7xl" w="100%">
          {/* 헤더 붙이기 */}
          <Box>
            <Link to="/main">
              <Header
                account={account}
                setAccount={setAccount}
                bgColor={'black'}
              />
            </Link>
          </Box>

          {/* 중간 슬라이드 or 이미지 부분  */}
          <Box>
            <SlideBox />
          </Box>

          {/* 포토 카드 + 설명 등등 ~> 아무래도 서비스에 관련된 설명을 넣는게 좋지 않을까?*/}
          <Box bgColor="orange.200">안녕</Box>
          <Box bgColor="orange.300">안녕여어어</Box>
          <Box bgColor="orange.400">
            안녕여이 컴포넌트는 왜 알아서 세로로 배치되는 건데 어어
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
export default Main;
