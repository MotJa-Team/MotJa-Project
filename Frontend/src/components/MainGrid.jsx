"use client";
import React from "react";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import { Text } from "@nextui-org/react";

export const MainGrid = () => {
  return (
    <Grid
      h="800px"
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
    >
      <GridItem
        rowSpan={2}
        colSpan={1}
        bg="rgba(218, 255, 253, 0.5)"
        borderRadius="md"
      >
        <Image
          src="/images/main-gift.png"
          alt="main-gift"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </GridItem>

      <GridItem
        rowSpan={1}
        colSpan={1}
        // bg="#797979"
        bg="rgba(194, 207, 255, 0.5)"
        borderRadius="md"
        justifyItems="center"
        alignContent="center"
      >
        <Text h1 size={40} color="white" weight="700">
          Unforgettable Birthdays
        </Text>
        <Text h1 size={20} color="white" weight="500">
          1년의 단 하루를 특별한 놀라움으로 만들어 보세요. 받고 싶은 선물을
          등록만 하면, 서로 모르는 친구들이더라도 함께 당신의 하루를
          빛내줄거에요. 선물금액이 모두 모이면 잊을 수 없는 순간을 NFT로 발행해
          줍니다.
        </Text>
      </GridItem>
      <GridItem
        rowSpan={2}
        colSpan={1}
        bg="rgba(218, 255, 253, 0.5)"
        borderRadius="md"
      >
        <Image
          src="/images/main-dc.png"
          alt="main-dc"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        // bg="#797979"
        bg="rgba(194, 207, 255, 0.5)"
        borderRadius="md"
        justifyItems="center"
        alignContent="center"
      >
        <Text h1 size={40} color="white" weight="700">
          Unforgettable Birthdays
        </Text>
        <Text h1 size={20} color="white" weight="500">
          1년의 단 하루를 특별한 놀라움으로 만들어 보세요. 받고 싶은 선물을
          등록만 하면, 서로 모르는 친구들이더라도 함께 당신의 하루를
          빛내줄거에요. 선물금액이 모두 모이면 잊을 수 없는 순간을 NFT로 발행해
          줍니다.
        </Text>
      </GridItem>
    </Grid>
  );
};
