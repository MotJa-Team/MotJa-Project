import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import Header from '../components/header';

// 기존 회원x == 추가 정보 입력받아야 하는 경우
// login 컴포넌트 약간 변경 필요함 == 페이지 이동 -> 메타마스크 로그인 -> 정보 입력 받도록 설정하기

const LoginD = ({ bgColor }) => {
  return (
    <ChakraProvider>
      <Flex
        bgColor={'black'}
        // maxW="7xl"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box p="2" maxW="7xl" w="100%">
          <Header bgColor={bgColor} />
        </Box>
        <Box bgColor="yellow.100" minH="100vh" maxW="7xl" w="100%">
          안녕 여기에 추가 정보 받는 곳으로 꾸밀 예정.
        </Box>
        <Box bgColor={'orange'} minH="100vh" maxW="7xl" w="100%">
          안녕
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default LoginD;
