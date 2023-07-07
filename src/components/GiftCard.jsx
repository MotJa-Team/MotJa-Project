"use client";
import {
    ChakraProvider,
    Card,
    Divider,
    Text,
    Heading,
    Stack,
    Button,
    Image,
    CardBody,
    ButtonGroup,
    CardFooter,
} from "@chakra-ui/react";
import Link from "next/link";
import { firestore } from "@/app/firebase";
import { collection, getDocs } from "firebase/firestore";

const GiftCard = () => {
    const [users, setUsers] = useState([]);
    // db의 users 컬렉션을 가져옴
    const usersCollectionRef = collection(firestore, "P_MOTZA");
    console.log({ users });

    // 시작될때 한번만 실행
    useEffect(() => {
        // 비동기로 데이터 받을준비
        const getUsers = async () => {
            // getDocs로 컬렉션안에 데이터 가져오기
            const data = await getDocs(usersCollectionRef);
            // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);
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
                        <Heading size="md">Living room Sofa</Heading>

                        <Text color="blue.600" fontSize="2xl">
                            $450
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing="2">
                        <Link href="/giftdetail">
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
