import {
  ChakraProvider,
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import Login from './login';
import LoginD from '../pages/LoginD';
import { Link } from 'react-router-dom';

const Header = ({ account, setAccount, bgColor }) => {
  return (
    <ChakraProvider>
      <Flex alignItems="center" gap="2" bgColor={bgColor}>
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
          {/* 지갑 로그인하는 버튼 생성 */}
          <Login account={account} setAccount={setAccount} />

          <Button colorScheme="cyan" variant="outline">
            Get Started
          </Button>
        </ButtonGroup>
      </Flex>
    </ChakraProvider>
  );
};
export default Header;
