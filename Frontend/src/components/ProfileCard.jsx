"use client";

import { Box, Button, Flex, Image } from "@chakra-ui/react";

export const ProfileCard = ({
  name,
  icon,
  icon2,
  discription,
  profilImageSrc,
}) => {
  return (
    <Flex
      justifyItems="center"
      alignContent="center"
      className="p"
      direction="column"
      mx="auto"
    >
      <Box bg="blue.100" width={400} height={400}>
        <Image src={profilImageSrc} alt="Profile Image" />
      </Box>
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
