"use client";

import { Box } from "@chakra-ui/react";

import { Text } from "@nextui-org/react";

const MainSlide = () => {
    return (
        <Box
            maxW="6xl"
            // bg="red.100"
            position="relative"
            zIndex={999}
            alignItems="center"
            justifyContent="center"
            mt="50px"
            mx="auto"
            size={150}
        >
            <Text
                h1
                size={150}
                color="#E6FAFE"
                weight="700"
                className="tracking-in-contract"
            >
                H A P P Y
            </Text>
            <div className="max-width-wrapper">
                <div className="text-container">
                    <Text h1 size={150} color="#E6FAFE" weight="700">
                        ㅤ C E L E B D A Y
                    </Text>
                </div>
            </div>
        </Box>
    );
};
export default MainSlide;
