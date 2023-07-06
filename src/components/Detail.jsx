"use client";
import {
    ChakraProvider,
    Flex,
    Box,
    Button,
    Heading,
    Text,
} from "@chakra-ui/react";
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from "@chakra-ui/react";
import M_Gift from "./M_Gift";

const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
];

const Detail = () => {
    const { activeStep, setActiveStep } = useSteps({
        index: 1,
        count: steps.length,
    });

    const activeStepText = steps[activeStep].description;

    return (
        <ChakraProvider>
            <Flex bgColor="yellow.100" direction={"column"} p={10}>
                <Box bgColor="blue.200" gap={4}>
                    <Flex direction="column" mx="auto" m="40px">
                        <Flex>
                            <Box pos="relative" width="500px" height="500px">
                                <Box
                                    pos="absolute"
                                    bgColor="purple.100"
                                    width="500px"
                                    height="500px"
                                    borderRadius="full"
                                >
                                    {/* 사용할 예정 */}
                                    {/* <img src={imgSrc} alt="NFT" /> */}
                                </Box>
                                <Box
                                    top={0}
                                    bgColor="purple.200"
                                    width="500px"
                                    height="500px"
                                    borderRadius="full"
                                >
                                    Loading ..
                                </Box>
                            </Box>

                            {/* 여기는 오른쪽 부분  */}
                            <Box
                                borderRadius="sm"
                                ml="10"
                                flex="1"
                                background="#38383d"
                                boxShadow="xs"
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

                                    <Flex
                                        direction="column"
                                        mt="50"
                                        color="#00DDFF"
                                        fontSize="xl"
                                        fontWeight="bold"
                                    >
                                        <Box>가격</Box>
                                        <Box>또 무슨 정보를 넣을까...</Box>
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
                                            // ref={copyTextUrl}
                                        >
                                            공유하기
                                        </Button>
                                        <M_Gift />
                                    </Flex>
                                </Box>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
                <Flex direction="column" bgColor="pink.100" mt="10" p="10">
                    {/* 상태바 구현 - 어떻게 수정하지...? */}
                    <Stepper
                        size="sm"
                        index={activeStep}
                        gap="0"
                        p={10}
                        // bgColor="#38383d"
                    >
                        {steps.map((step, index) => (
                            <Step key={index} gap="0">
                                <StepIndicator>
                                    <StepStatus complete={<StepIcon />} />
                                </StepIndicator>
                                <StepSeparator _horizontal={{ ml: "0" }} />
                            </Step>
                        ))}
                    </Stepper>
                    <Text>
                        Step {activeStep + 1}: <b>{activeStepText}</b>
                    </Text>
                    <Flex justifyContent="flex-end">
                        <Button
                            mr="10"
                            mt="5"
                            color="black"
                            bg="#00DDFF"
                            borderRadius="none"
                            p="5"
                        >
                            민팅하기{" "}
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </ChakraProvider>
    );
};

export default Detail;
