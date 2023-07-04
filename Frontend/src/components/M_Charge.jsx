import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ChakraProvider,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';

import { useDisclosure, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';
import React from 'react';

const M_Charge = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];
  return (
    <ChakraProvider>
      <Button
        mr="10"
        mt="5"
        color="black"
        bg="#00DDFF"
        borderRadius="none"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        충전하기
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody px="10">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              p="10"
            />
            <InputGroup mt="5">
              <InputLeftAddon width="20" p="auto" children="From" />
              <Input type="tel" placeholder="Enter your name" />
            </InputGroup>
            <InputGroup mt="5">
              <InputLeftAddon width="20" children="Price" />
              <Input type="tel" placeholder="Enter the amount you want" />
            </InputGroup>
          </ModalBody>
          <ModalFooter mb="5">
            <Button onClick={onClose}>Close</Button>
            <Button ml="5" colorScheme="blue">
              Charge
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default M_Charge;
