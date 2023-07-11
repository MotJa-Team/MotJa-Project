"use client";

import Link from "next/link";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Box } from "@chakra-ui/react";
import { NFT_CONTRACT } from "@/lib/web3.config";
import { useEffect } from "react";
export const PresentCard = ({
  account,
  pageUser,
  setPresentNum,
  giftNum,
  giftName,
  giftPrice,
  giftUrl,
  setChargeRatio,
}) => {
  const getChargeRatio = async () => {
    try {
      const response = await NFT_CONTRACT.methods
        .getChargeRatio(pageUser, Number(giftNum))
        .call();

      setChargeRatio(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getChargeRatio();
  }, [giftNum]);

  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            No. {giftNum}
          </Text>
          <Text h3 color="black">
            {giftName}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="/images/unopennft.png"
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={25}>
              Price : {giftPrice} CT
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                color="secondary"
                onPress={() => setPresentNum(giftNum)}
              >
                <Link href={`/user/${pageUser}/present/${giftNum}`}>
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Notify Me
                  </Text>
                </Link>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
