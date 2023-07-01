"use client";

import { Box } from "@chakra-ui/react";

const Main = ({ account, setAccount, bgColor }) => {
    return (
        <>
            {/* 포토 카드 + 설명 등등 ~> 아무래도 서비스에 관련된 설명을 넣는게 좋지 않을까?*/}
            <Box bgColor="orange.200">안녕</Box>
            <Box bgColor="orange.300">안녕여어어</Box>
            <Box bgColor="orange.400">
                안녕여이 컴포넌트는 왜 알아서 세로로 배치되는 건데 어어
            </Box>
        </>
    );
};
export default Main;
