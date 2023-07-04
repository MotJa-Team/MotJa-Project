"use client";
import { Flex } from "@chakra-ui/react";
import { useState, createContext } from "react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
// export const AppContext = createContext();

import Preimage from "@/components/preimage";
import Footer from "@/components/Footer";

export default function Home() {
    const [account, setAccount] = useState("");
    // const { account, setAccount } = useContext(AppContext);

    return (
        <>
            {/* <Preimage /> */}

            <Flex flexWrap="wrap">
                <Link href="/main">
                    {/* <Spline
                        style={{
                            position: "fixed",
                        }}
                        scene="https://prod.spline.design/sl1oSdrbF4r2puz6/scene.splinecode"
                    /> */}
                </Link>
            </Flex>
        </>
    );
}
