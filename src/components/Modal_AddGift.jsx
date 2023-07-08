// 모달 - 상품 등록
"use client";

import { firestore } from "@/firebase";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Box,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ButtonGroup,
  ChakraProvider,
  useDisclosure,
  useToast,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

import { useState } from "react";

export const Modal_AddGift = ({ account }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const [giftPrice, setGiftPrice] = useState("");
  const [giftName, setGiftName] = useState("");
  const [giftUrl, setGiftUrl] = useState("");
  const [giftNum, setGiftNum] = useState("");

  const clickGiftSave = () => {
    if (/\D/.test(giftNum) /*|| giftNum == null*/) {
      return toast({
        title: "위시리스트 순서 입력란을 확인해주세요!",
        description: " '-'문자를 사용하거나 입력하지 않으면 안돼요!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    //  else if (giftUrl == null) {
    //     return toast({
    //         title: "링크를 적어주세요",
    //         status: "error",
    //         duration: 9000,
    //         isClosable: true,
    //     });
    // } else if (giftName == null) {
    //     return toast({
    //         title: "선물명 적어주세요",
    //         status: "error",
    //         duration: 9000,
    //         isClosable: true,
    //     });
    // } else if (giftPrice == null) {
    //     return toast({
    //         title: "선물 금액을 적어주세요",
    //         status: "error",
    //         duration: 9000,
    //         isClosable: true,
    //     });
    // }
    else {
      firestore
        .collection(account)
        .doc(giftNum)
        .set({
          giftNum,
          giftPrice,
          giftName,
          giftUrl,
        })
        .then(() => {
          console.log("Data saved successfully");
        })
        .catch((error) => {
          console.error("Error saving data:", error);
        });
    }
  };

  const onClickCancel = async () => {
    setGiftPrice("");
    setGiftName("");
    setGiftUrl("");
    setGiftNum("");
    onClose();
  };

  return (
    <ChakraProvider>
      <button
        class="gift-button"
        onClick={() => {
          onOpen();
        }}
      >
        <span class="text">Add Gift</span>
        <span class="blob"></span>
        <span class="blob"></span>
        <span class="blob"></span>
        <span class="blob"></span>
      </button>
      <Modal isCentered isOpen={isOpen} onClose={onClickCancel}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>👀선물을 등록👀</ModalHeader>
          <Box
            mx="auto"
            w="300px"
            h="300px"
            sx={{
              borderRadius: "50px",
              background: "linear-gradient(145deg, #f0f0f0, #cacaca)",
              boxShadow: "30px 30px 60px #bebebe, -30px -30px 60px #ffffff",
            }}
          ></Box>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>✨위시리스트 순서</FormLabel>
              <Input
                placeholder="위시리스트 순서를 정해주세요"
                value={giftNum}
                onChange={(e) => setGiftNum(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>✨선물 링크</FormLabel>
              <Input
                placeholder="https://GiftLink"
                value={giftUrl}
                onChange={(e) => setGiftUrl(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>✨선물 명</FormLabel>
              <Input
                placeholder="선물 명을 입력해주세요"
                value={giftName}
                onChange={(e) => setGiftName(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>✨금액</FormLabel>
              <Input
                placeholder="10000"
                value={giftPrice}
                onChange={(e) => setGiftPrice(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Popover
              returnFocusOnClose={false}
              onClose={onClickCancel}
              onClick={clickGiftSave}
              placement="right"
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <Button colorScheme="pink">내 마음속에 저장</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader fontWeight="semibold">
                  ⛔ 경고 ⛔ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  등록된 선물은 수정이 어려울 수 있어요. 다시 한 번 더 확인해
                  주세요!!!
                </PopoverBody>
                <PopoverFooter display="flex" justifyContent="flex-end">
                  <ButtonGroup size="sm">
                    <Button variant="outline" onClick={onClickCancel}>
                      취소
                    </Button>
                    <Button colorScheme="red" onClick={clickGiftSave}>
                      등록
                    </Button>
                  </ButtonGroup>
                </PopoverFooter>
              </PopoverContent>
            </Popover>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};
