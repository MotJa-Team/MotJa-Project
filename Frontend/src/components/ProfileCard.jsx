"use client";

import { Box, Button, Flex } from "@chakra-ui/react";

export const ProfileCard = ({ name, icon, icon2, discription }) => {
  return (
    <Flex
      borderRadius="md"
      bg="rgba(194, 207, 255, 0.5)"
      justifyItems="center"
      alignContent="center"
      className="p"
      direction="column"
      mx="auto"
    >
      <Box bg="blue.100" width={350} height={350} mt={3}></Box>
      <Box className="span">
        <Box>
          <Flex gap={4} justifyContent="center" alignItems="center">
            <Box mb={0}>{name}</Box>
            <Button class="card-socials-btn github">{icon}</Button>
            <Button class="card-socials-btn github">{icon2}</Button>
          </Flex>
          <Box mt={4}>{discription}</Box>
        </Box>
      </Box>
    </Flex>
  );
};
