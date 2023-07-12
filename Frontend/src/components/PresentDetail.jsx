"use client";

import {
  ChakraProvider,
  Flex,
  Box,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Text } from "@nextui-org/react";
import { TbSend } from "react-icons/tb";
import { BsGiftFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { NFT_CONTRACT, NFT_CONTRACT_ADDRESS } from "@/lib/web3.config";
import { SlideBox } from "./SlideBox";
import { Modal_Present } from "./Modal_Present";
import Link from "next/link";
import axios from "axios";

export const PresentDetail = ({
  pathname,
  account,
  tBalance,
  setTBalance,
  pageUser,
  user,
  presents,
  chargeRatio,
  setChargeRatio,
  presentNum,
  setPresentNum,
  presentInfo,
}) => {
  const [tokenId, setTokenId] = useState(0);
  const [metadata, setMetadata] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [remainAmount, setRemainAmount] = useState("");
  const [currentB, setCurrentB] = useState("");

  const currentURL = process.env.NEXT_PUBLIC_URL + pathname;

  const handleCopyClipBoard = async () => {
    try {
      console.log(currentURL);
      await navigator.clipboard.writeText(currentURL);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  const getChargeRatio = async () => {
    try {
      const response = await NFT_CONTRACT.methods
        .getChargeRatio(pageUser, presentNum)
        .call();

      setChargeRatio(Number(response));
    } catch (error) {
      console.error(error);
    }
  };

  const getCurrentBalance = async () => {
    try {
      const response = await NFT_CONTRACT.methods
        .PRESENT(pageUser, presentNum)
        .call();

      setCurrentB(Number(response.currentB));
      setRemainAmount(Number(response.finalB) - Number(response.currentB));
    } catch (error) {
      console.error(error);
    }
  };

  const getTokenId = async () => {
    try {
      const totalSupply = await NFT_CONTRACT.methods.totalSupply().call();

      for (var i = 1; i <= totalSupply; i++) {
        const response = await NFT_CONTRACT.methods.presentNum(i).call();

        if (Number(response) == presentNum) {
          setTokenId(Number(response));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getTokenUri = async () => {
    try {
      const tokenUri = await NFT_CONTRACT.methods.tokenURI(tokenId).call();
      const response = await axios.get(tokenUri);

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTokenId();
    getCurrentBalance();
    getChargeRatio();
  }, [presentNum]);

  useEffect(() => {
    getTokenUri();
  }, [tokenId]);

  return (
    <ChakraProvider>
      <Flex
        maxW="6xl"
        minH="100vh"
        direction={"column"}
        gap={10}
        mx="auto"
        mt={20}
      >
        <Box
          zIndex={999}
          borderRadius="25px"
          bg="rgba(194, 207, 255, 0.5)"
          boxShadow="5px 5px 10px #bdcdd0,
                                -5px -5px 10px #ffffff"
        >
          <Flex direction="column" mx="auto" m="40px">
            <Flex gap={20}>
              <Box pos="relative" width="500px" height="500px">
                <Box
                  pos="absolute"
                  width="500px"
                  height="500px"
                  borderRadius="25px"
                  background="#e6fafe"
                  boxShadow="5px 5px 10px #bdcdd0,
                                -5px -5px 10px #ffffff"
                >
                  <Image src={metadata?.image} alt={metadata?.name} />
                </Box>
              </Box>

              <Box flex="1">
                <Box mb={20}>
                  <Text h1 size={40} color="white" weight="700">
                    No. {presentInfo?.giftNum}
                  </Text>
                  <Text h1 size={40} color="white" weight="700">
                    상품명
                  </Text>
                  <Text h1 size={30} color="white" weight="700">
                    {presentInfo?.giftName}
                  </Text>
                  <Text h1 size={40} color="white" weight="700">
                    선물한금액 / 최종금액
                  </Text>
                  <Text h1 size={30} color="white" weight="700">
                    {currentB} / {presentInfo?.giftPrice}
                  </Text>
                  <Text h1 size={16} color="white" weight="700">
                    by {pageUser}
                  </Text>{" "}
                </Box>

                <Flex
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  gap={4}
                  mb={10}
                >
                  {chargeRatio != 100 && (
                    <button onClick={handleCopyClipBoard} class="send-button">
                      <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                          <div class="svg">
                            <TbSend />
                          </div>
                        </div>
                      </div>
                      <span>선물링크공유</span>
                    </button>
                  )}

                  {account && account !== pageUser && chargeRatio !== 100 && (
                    <button
                      class="send-button"
                      onClick={() => {
                        onOpen();
                      }}
                    >
                      <Modal_Present
                        pageUser={pageUser}
                        account={account}
                        tBalance={tBalance}
                        setTBalance={setTBalance}
                        presentNum={presentNum}
                        isOpen={isOpen}
                        onClose={onClose}
                        remainAmount={remainAmount}
                      />
                      <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                          <div class="svg">
                            <BsGiftFill />
                          </div>
                        </div>
                      </div>
                      <span>선물하기</span>
                    </button>
                  )}
                  {chargeRatio === 100 && account === pageUser && (
                    <Link
                      href={`https://testnets.opensea.io/assets/goerli/${NFT_CONTRACT_ADDRESS}/${tokenId}`}
                      target="_blank"
                    >
                      <button class="button-mint">
                        <div>민팅 확인하기</div>
                      </button>
                    </Link>
                  )}
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Box
          zIndex={999}
          borderRadius="25px"
          bg="rgba(194, 207, 255, 0.5)"
          boxShadow="5px 5px 10px #bdcdd0,
                                -5px -5px 10px #ffffff"
          mt={15}
        >
          <Box m="40px">
            <Text h1 size={30} color="white" weight="700">
              Charged amount status
            </Text>
            <SlideBox chargeRatio={chargeRatio} />
          </Box>
        </Box>

        <Box
          zIndex={999}
          borderRadius="25px"
          bg="rgba(194, 207, 255, 0.5)"
          boxShadow="5px 5px 10px #bdcdd0,
                                -5px -5px 10px #ffffff"
          mt={15}
          mb={100}
        >
          <Box m="40px">
            <Text h1 size={30} color="white" weight="700">
              선물해준사람들
            </Text>
            <Text h1 size={20} color="white" weight="700">
              <Flex gap={10} mt={30}>
                {metadata?.attributes?.map((v, i) => {
                  return <div key={i}>{v.value}</div>;
                })}
              </Flex>
            </Text>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
