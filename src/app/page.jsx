"use client";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <>
      <Flex flexWrap="wrap">
        <Link href="/main">
          <Spline
            style={{
              position: "fixed",
            }}
            scene="https://prod.spline.design/sl1oSdrbF4r2puz6/scene.splinecode"
          />
        </Link>
      </Flex>
    </>
  );
}
