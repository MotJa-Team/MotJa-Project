import { ChakraProvider, Box, Flex, Button } from '@chakra-ui/react';
import GiftCard from './giftCard';

const GiftCardsBox = () => {
  return (
    <ChakraProvider>
      <Box bgColor="blue.300" h="100%">
        <Flex m="40px" bgColor="purple.200" gap={20}>
          <GiftCard />
          <GiftCard />
          <GiftCard />
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default GiftCardsBox;
