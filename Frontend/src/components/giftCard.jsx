import {
  ChakraProvider,
  Card,
  CardHeader,
  Divider,
  Text,
  Heading,
  Stack,
  Button,
  Image,
  CardBody,
  ButtonGroup,
  CardFooter,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from './header';

const GiftCard = () => {
  return (
    <ChakraProvider>
      <Card>
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">이름</Heading>

            <Text color="blue.600" fontSize="2xl">
              금액
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link to="/detail">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </ChakraProvider>
  );
};
export default GiftCard;
