"use client";

import { Flex, Box, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../layout";
import { Intro } from "@/components/Intro";
import { PresentCard } from "@/components/PresentCard";
import { Text } from "@nextui-org/react";

import { firestore } from "@/firebase";

const User = () => {
  const {
    account,
    setAccount,
    tBalance,
    setTBalance,
    pathname,
    user,
    setUser,
    presents,
    setPresents,
    presentNum,
    setPresentNum,
    pageUser,
    setPageUser,
    chargeRatio,
    setChargeRatio,
  } = useContext(AppContext);

  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    setPageUser(pathname.substring(6, pathname.legnth));
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const collectionRef = firestore.collection(
          pageUser //여기에 메타마스크 주소를 받아오면 됨!!
        );

        // const collectionRef = firestore.collection({ pageUser });
        const querySnapshot = await collectionRef.get();

        const docsData = querySnapshot.docs
          .filter((doc) => doc.id !== "0")
          .map((doc) => {
            doc.data();
            const mapGift = doc.data();
            const { giftNum, giftName, giftPrice, giftUrl } = mapGift;

            return {
              giftNum,
              giftName,
              giftPrice,
              giftUrl,
            };
          });

        const usersData = querySnapshot.docs
          .filter((doc) => doc.id == 0)
          .map((doc) => {
            doc.data();
            const mapUser = doc.data();
            const { addr, birth, name, num } = mapUser;

            return { addr, birth, name, num };
          });
        setPresents(docsData);
        setUser(usersData);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [pageUser]);

  // useEffect(() => {
  //   console.log(user);
  //   console.log(presents);
  // }, []);

  return (
    <>
      {pageUser ? (
        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="row"
          gap={10}
          maxW="6xl"
          mt="30px"
          mx="auto"
          zIndex={999}
        >
          <Flex
            // bg="red.200"
            minH="100vh"
            direction={"column"}
            gap={10}
          >
            <Intro
              pathname={pathname}
              user={user}
              pageUser={pageUser}
              account={account}
            />

            <Box flex class="my-box" h="100%">
              <Flex direction="column">
                <Box>
                  {isExpanded ? (
                    <Box
                      display="grid"
                      gridTemplateColumns="repeat(3, 1fr)"
                      gridGap={4}
                    >
                      {presents.length > 0 &&
                        presents.map((docData) => (
                          <PresentCard
                            pageUser={pageUser}
                            account={account}
                            setPresentNum={setPresentNum}
                            chargeRatio={chargeRatio}
                            setChargeRatio={setChargeRatio}
                            key={docData.id}
                            giftName={docData.giftName}
                            giftNum={docData.giftNum}
                            giftPrice={docData.giftPrice}
                            giftUrl={docData.giftUrl}
                          />
                        ))}
                    </Box>
                  ) : (
                    <Box
                      display="grid"
                      gridTemplateColumns="repeat(3, 1fr)"
                      gridGap={4}
                    >
                      {presents.slice(0, 3).map((docData) => (
                        <PresentCard
                          pageUser={pageUser}
                          account={account}
                          setPresentNum={setPresentNum}
                          chargeRatio={chargeRatio}
                          setChargeRatio={setChargeRatio}
                          key={docData.id}
                          giftName={docData.giftName}
                          giftNum={docData.giftNum}
                          giftPrice={docData.giftPrice}
                          giftUrl={docData.giftUrl}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
                {presents.length > 3 &&
                  (isExpanded ? (
                    <Button
                      justifyContent="center"
                      mx="auto"
                      mb="10"
                      mt="10"
                      leftIcon={<ChevronUpIcon />}
                      onClick={handleToggle}
                    ></Button>
                  ) : (
                    <Button
                      justifyContent="center"
                      mx="auto"
                      mb="10"
                      mt="10"
                      leftIcon={<ChevronDownIcon />}
                      onClick={handleToggle}
                    ></Button>
                  ))}
              </Flex>
            </Box>
          </Flex>
        </Box>
      ) : (
        <Flex
          zIndex={1}
          minH="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <Box zIndex={1}>
            <div className="wrapper" mx="auto">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="shadow"></div>
              <div class="shadow"></div>
              <div class="shadow"></div>
            </div>
            <Text h1 size={43} color="#E6FAFE" weight="700">
              Loading
            </Text>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default User;
