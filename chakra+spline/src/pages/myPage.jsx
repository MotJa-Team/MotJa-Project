import Header from '../components/header';
// import Header from '..//Header';
import {
  ChakraProvider,
  Flex,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import NFTCard from '../components/NFTCard';

const MyPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
        gap={5}
        p="10"
      >
        <Flex bgColor="red.100" w="15%">
          <Box
            minH="100vh"
            w="90%"
            mx="auto"
            mt="20px"
            mb="20px"
            bgColor="gray.100"
          >
            <Box bgColor="green.200" h="80px" mb="20px">
              프로필 넣는 부분
            </Box>
            <Box bgColor="green.300" h="80px">
              자세한 설명/ 친구 목록
            </Box>
          </Box>
        </Flex>
        <Flex bgColor="blue.100" w="85%">
          <Box
            minH="100vh"
            w="96%"
            mx="auto"
            mt="20px"
            mb="20px"
            bgColor="gray.100"
          >
            <Flex bgColor="red.100" gap={4} direction="col">
              <Flex bgColor="green.500" direction="col">
                내가 등록한{' '}
              </Flex>
              <Flex>
                <NFTCard /> <NFTCard /> <NFTCard />{' '}
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default MyPage;

// /* 서랍형을 이용할 경우
//           <Box pt={10}>
//             <Button ref={btnRef} onClick={onOpen}>
//               {' '}
//               ← MENU
//             </Button>
//             <Drawer
//               isOpen={isOpen}
//               placement="left"
//               onClose={onClose}
//               finalFocusRef={btnRef}
//             >
//               <DrawerOverlay />
//               <DrawerContent>
//                 <DrawerCloseButton />
//                 <DrawerHeader>Create your account</DrawerHeader>

//                 <DrawerBody>
//                   <Input placeholder="Type here..." />
//                 </DrawerBody>

//                 <DrawerFooter>
//                   <Button variant="outline" mr={3} onClick={onClose}>
//                     창 닫기
//                   </Button>
//                 </DrawerFooter>
//               </DrawerContent>
//             </Drawer>
//           </Box> */
