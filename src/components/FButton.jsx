"use client";

import {
    Box,
    Flex,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Text,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    InputRightElement,
    useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

function FButton() {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    const [donationAmount, setDonationAmount] = useState(0);

    const handleDonationAmount = (amount) => {
        setDonationAmount((prevAmount) => prevAmount + amount);
    };

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>선물하기 </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex>
                            <Input type="text" value={donationAmount} />{" "}
                            <Text>원</Text>
                        </Flex>
                        <Button onClick={() => handleDonationAmount(5000)}>
                            + 5천원
                        </Button>
                        <Button onClick={() => handleDonationAmount(10000)}>
                            + 1만원
                        </Button>
                        <Button onClick={() => handleDonationAmount(30000)}>
                            + 3만원
                        </Button>
                        <Button onClick={() => handleDonationAmount(50000)}>
                            + 5만원
                        </Button>
                        <Button onClick={() => handleDonationAmount()}>
                            직접입력
                        </Button>
                        {/* Add more buttons for other amounts */}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Donate Now</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default FButton;
