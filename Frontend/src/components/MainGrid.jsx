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
        mx="auto"
        p={4}
      >
        <Text h1 size={40} color="white" weight="700">
          나만의 생일 NFT까지 GET!
        </Text>
        <Text h1 size={20} color="white" weight="500">
          매 해 찾아오는 생일이지만, 그 순간을 축하해주는 사람은 해 마다
          다릅니다.
          <br /> 선물을 등록하고 선물 금액이 모두 충전 되면, 각 선물마다
          충전해준 친구들의 이름을 적은 NFT를 발행해 드립니다.
          <br />
          원하는 선물만 받고 NFT까지 받는 특별한 생일을 경험해 보세요 !
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
        mx="auto"
        p={4}
      >
        <Text h1 size={40} color="white" weight="700">
          원하는 선물만 GET! 하자!
        </Text>
        <Text h1 size={20} color="white" weight="500">
          아직도 취향에 맞지 않는 기프티콘이 쌓여 가고 있으신가요 ?
          <br />
          받고 싶은 선물들을 담아두고 링크 공유만 해주세요.
          <br />
          저희 플랫폼은 서로 모르는 친구들이더라도 함께 당신의 생일을 빛날 수
          있도록 도와드려요.
        </Text>
      </GridItem>
    </Grid>
  );
};
