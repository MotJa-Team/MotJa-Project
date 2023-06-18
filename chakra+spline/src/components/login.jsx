import { Button, useToast, ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import LoginD from '../pages/LoginD';

const Login = () => {
  const [account, setAccount] = useState('');
  const toast = useToast();

  const onClickMetaMask = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts[0]);
      //   console.log(accounts);

      toast({
        title: 'Account success!',
        // description: '추가 정보를 입력해 주세요',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ChakraProvider>
      {/*버전1-로그인버튼 account로 대체+지갑로그인 기능만 */}
      {account ? (
        <Button
          leftIcon={<CheckCircleIcon />}
          colorScheme="whatsapp"
          variant="outline"
        >
          {account.substring(0, 4) +
            '-' +
            account.substring(account.length - 4)}
        </Button>
      ) : (
        // <Link to="/loginD">
        <Button
          onClick={onClickMetaMask}
          colorScheme="messenger"
          variant="outline"
        >
          Sign Up
        </Button>
        // </Link>
      )}

      {/*버전2- 기존 회원일 경우 ? 메타마스크 로그인만 실행 : 회원가입 페이지로 이동 */}
      {/*회원가입 필요할 경우 ==  Sigin Up 클릭시 - 페이지 바로 이동 후 메타마스크 로그인 + 정보 입력하기 */}
    </ChakraProvider>
  );
};
export default Login;
