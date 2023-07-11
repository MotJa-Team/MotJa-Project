"use client";

import { ChakraProvider, Flex, Box, Image } from "@chakra-ui/react";
import { Text } from "@nextui-org/react";
import { TbSend } from "react-icons/tb";
import { BsGiftFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { NFT_CONTRACT } from "@/lib/web3.config";
import { SlideBox } from "./SlideBox";

export const PresentDetail = ({
  pathname,
  account,
  pageUser,
  user,
  presents,
  chargeRatio,
  setChargeRatio,
}) => {
  const [presentNum, setPresentNum] = useState(0);
  const [presentInfo, setPresentInfo] = useState();

  const currentURL = process.env.NEXT_PUBLIC_URL + pathname;

  const onClickLink = () => {
    console.log(currentURL);
  };

  const getChargeRatio = async () => {
    try {
      console.log(pageUser);
      console.log(presentInfo.giftNum);
      const response = await NFT_CONTRACT.methods
        .getChargeRatio(pageUser, presentInfo.giftNum)
        .call();

      console.log(response);

      setChargeRatio(Number(response));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setPresentNum(Number(pathname.substring(57, pathname.legnth)));
    setPresentInfo(presents[presentNum - 1]);
  }, [presents]);

  useEffect(() => {
    getChargeRatio();
  }, [presentInfo]);

  console.log(presents);

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
                  <Image src="/images/nft.png" alt="nft" />
                </Box>
              </Box>

              <Box flex="1">
                <Box mb={20}>
                  <Text h1 size={50} color="white" weight="700">
                    No. {presentInfo?.giftNum}
                  </Text>
                  <Text h1 size={50} color="white" weight="700">
                    상품명
                  </Text>
                  <Text h1 size={30} color="white" weight="700">
                    ㅤ: {presentInfo?.giftName}
                  </Text>
                  <Text h1 size={50} color="white" weight="700">
                    가격
                  </Text>
                  <Text h1 size={30} color="white" weight="700">
                    ㅤ: {presentInfo?.giftPrice}
                  </Text>
                  <Text h1 size={20} color="white" weight="700">
                    ㅤ{pageUser}
                  </Text>{" "}
                </Box>

                <Flex
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  gap={4}
                  mb={10}
                >
                  <button onClick={onClickLink} class="send-button">
                    <div class="svg-wrapper-1">
                      <div class="svg-wrapper">
                        <div class="svg">
                          <TbSend />
                        </div>
                      </div>
                    </div>
                    <span>선물링크공유</span>
                  </button>

                  {account !== pageUser && (
                    <button class="send-button">
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
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>

        {/* ////////////////////////// */}
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
      </Flex>
    </ChakraProvider>
  );
};
