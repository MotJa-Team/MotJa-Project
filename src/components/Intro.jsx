"use client";
import {
    ChakraProvider,
    Flex,
    Box,
    Button,
    Heading,
    Text,
} from "@chakra-ui/react";
import "../styles/global.css";
//랜덤 프로필 만드는 방법 == 사용할 예정
// const ranNum = Math.floor(Math.random() * 1000) + 1;
// console.log(ranNum);

// const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = () => {
    return (
        <ChakraProvider>
            <Box class="my-box" gap={4}>
                <Flex direction="column" mx="auto" m="40px">
                    <Flex>
                        <Box pos="relative" width="300px" height="300px">
                            <Box
                                pos="absolute"
                                width="300px"
                                height="300px"
                                borderRadius="50%"
                                background="#e0e0e0"
                                boxShadow="12px 12px 27px #acacac, -12px -12px 27px #ffffff"
                            >
                                {/* 사용할 예정 */}
                                {/* <img src={imgSrc} alt="NFT" /> */}
                            </Box>
                            {/* <Box
                                top={0}
                                bgColor="purple.500"
                                width="300px"
                                height="300px"
                                borderRadius="full"
                            ></Box> */}
                        </Box>

                        {/* 여기는 오른쪽 부분  */}
                        <Box
                            borderRadius="sm"
                            ml="10"
                            flex="1"
                            background="#38383d"
                            boxShadow="md"
                            _hover={{ background: "#42414d" }}
                        >
                            <Box p={5}>
                                <Heading
                                    pb={2}
                                    color="#00DDFF"
                                    fontSize="2xl"
                                    fontWeight="bold"
                                >
                                    Name
                                </Heading>
                                <Text>
                                    by
                                    {/* <Box>{CONTRACT_ADDRESS}</Box> */}
                                </Text>
                                <Text mt="5" fontSize={["lg"]}>
                                    여기에는 한줄 소개 할까 말까 고민중임
                                </Text>
                                <Flex
                                    mt="5"
                                    color="#00DDFF"
                                    fontSize="xl"
                                    fontWeight="bold"
                                >
                                    <Box>등록한 총 선물</Box>
                                    <Box>펀딩 완료된 선물 수</Box>
                                    <Box>진행중</Box>
                                </Flex>

                                <Flex
                                    justifyContent="flex-end"
                                    alignItems="flex-end"
                                >
                                    <Button
                                        mt="30"
                                        color="black"
                                        bg="#00DDFF"
                                        borderRadius="none"
                                        mr="10"
                                    >
                                        프로필 편집
                                    </Button>
                                    <Button
                                        mr="10"
                                        mt="5"
                                        color="black"
                                        bg="#00DDFF"
                                        borderRadius="none"
                                    >
                                        프로필 공유하기{" "}
                                    </Button>
                                </Flex>
                            </Box>
                        </Box>
                        {/* <Box bgColor="purple.300" flex="1">
                <Flex justify="flex-end" mb="20px">
                  <Button mr="20px">프로필 편집</Button>
                  <Button>프로픨 공유</Button>
                </Flex>
                <div className="mt-4 text-2xl font-bold flex items-center"></div>
                <Box>사용자 명 넣어주기 </Box>
                <Box px="20px" mb="20px">
                  {' '}
                  이름(firebase에 저장한 이름 불러오기 )
                </Box>
  
                <Flex>
                  <Box
                    bgColor="pink.100"
                    // w="200px"
                    h="100px"
                    mx="20px"
                    px="10px"
                  >
                    등록한 선물
                  </Box>
                  <Box
                    bgColor="pink.100"
                    // w="200px"
                    h="100px"
                    mx="20px"
                    px="10px"
                  >
                    {' '}
                    펀딩성공한 선물
                  </Box>
                  <Box
                    bgColor="pink.100"
                    // w="200px"
                    h="100px"
                    mx="20px"
                    px="10px"
                  >
                    진행중
                  </Box>
                </Flex>
              </Box> */}
                    </Flex>
                </Flex>
            </Box>
        </ChakraProvider>
    );
};
export default Intro;
