"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { firestore } from "@/app/firebase";
import { collection, getDocs, doc } from "firebase/firestore";

const MainCard = ({ account, setAccount }) => {
    // 한 컬렉션까지는 넘어온다 !
    const [users, setUsers] = useState([]);
    // db의 users 컬렉션을 가져옴
    const usersCollectionRef = collection(firestore, account);
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
        <Card css={{ w: "100%", h: "400px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text
                        size={12}
                        weight="bold"
                        transform="uppercase"
                        color="#ffffffAA"
                    >
                        New
                    </Text>
                    <Text h3 color="black">
                        Gift-
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="https://nextui.org/images/card-example-6.jpeg"
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
                    borderTop:
                        "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Text color="#000" size={12}>
                            Price -
                        </Text>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            <Link href="/giftdetail">
                                <Button flat auto rounded color="secondary">
                                    <Text
                                        css={{ color: "inherit" }}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                        Notify Me
                                    </Text>
                                </Button>
                            </Link>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
};
export default MainCard;
