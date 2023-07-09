"use client";
import { Box, Link } from "@chakra-ui/react";
import ProfileCard from "./ProfileCard";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { Text } from "@nextui-org/react";
const ProfileCardD = () => {
    return (
        <Box mt="100px">
            <Text h1 size={80} color="#E6FAFE" weight="700">
                Profile
            </Text>
            <Box className="profile" color="blackAlpha.300" minh="100vh">
                <ProfileCard
                    name="ATTIPARK"
                    discription="배낭 메고 여행이나 갈까"
                    icon={
                        <Link href="https://github.com/ATTIPARK">
                            <BsGithub />
                        </Link>
                    }
                    icon2={
                        <Link href="https://www.instagram.com/etoile_brillante_jy/">
                            <BsInstagram />
                        </Link>
                    }
                />
                <ProfileCard
                    name="OLLOK"
                    discription="잠깐 이면 돼 잠깐이면"
                    icon={
                        <Link href="https://github.com/Choi-jujuyeon">
                            <BsGithub />
                        </Link>
                    }
                    icon2={
                        <Link href="https://www.instagram.com/etoile_brillante_jy/">
                            <BsInstagram />
                        </Link>
                    }
                />
                <ProfileCard
                    name="RoRA"
                    discription="시간아 멈춰 봐 !"
                    icon={
                        <Link href="https://github.com/Choi-jujuyeon">
                            <BsGithub />
                        </Link>
                    }
                    icon2={
                        <Link href="https://www.instagram.com/etoile_brillante_jy/">
                            <BsInstagram />
                        </Link>
                    }
                />
            </Box>
        </Box>
    );
};

export default ProfileCardD;
