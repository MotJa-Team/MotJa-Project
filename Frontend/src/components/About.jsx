"use client";
import { Text } from "@nextui-org/react";
import { Grid, GridItem, Box, Image } from "@chakra-ui/react";

export const About = () => {
  return (
    <>
      <Box mt="100px" mb="400px">
        <Text h1 size={80} color="#E6FAFE" weight="700">
          Payment
        </Text>
        <Grid
          h="100px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem
            rowSpan={1}
            colSpan={1}
            bg="rgba(218, 255, 253, 0.5)"
            borderRadius="md"
          >
            <Box width="100%" height="100%">
              <Image
                src="/images/coin.png"
                alt="coin"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
          </GridItem>

          <GridItem
            rowSpan={1}
            colSpan={1}
            bg="rgba(194, 207, 255, 0.5)"
            borderRadius="md"
            justifyItems="center"
            alignContent="center"
            p={4}
            px="auto"
          >
            <Box justifyItems="center">
              <Text
                h1
                size={40}
                color="white"
                weight="700"
                justifyItems="center"
              >
                <br />
                결제는 CT 토큰으로 !<br />
              </Text>
              <Text
                h1
                size={20}
                color="white"
                weight="500"
                justifyItems="center"
              >
                <br />
                CT 토큰이란 저희 플랫폼이 자체 발행한 토큰입니다.
                <br />
                선물 충전은 이 토큰으로만 가능하니 선물하기 전에 잔액을 확인해
                주세요 !
                <br />
                토큰 구매시 환율에 따라 약간의 비용이 발생할 수 있어요.
                <br />
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
