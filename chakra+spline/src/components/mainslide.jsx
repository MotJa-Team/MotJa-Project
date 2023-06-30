import { ChakraProvider, Flex, Box, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const SlideBox = () => {
  return (
    <ChakraProvider>
      <Flex bgColor="orange.100" borderRadius="lg">
        <Box borderRadius="full" w="100%">
          <Spline
            //왜 적용이 안되시는건지...? style={{ borderRadius: 'full' }}
            scene="https://prod.spline.design/pWHUeuuxFRItopmZ/scene.splinecode"
          />
        </Box>
      </Flex>
    </ChakraProvider>
  );

  /* 슬라이드로 할 경우에 사용 예정
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <Spline
      height="80%"
      scene="https://prod.spline.design/pWHUeuuxFRItopmZ/scene.splinecode"
    />,
    <Spline scene="https://prod.spline.design/pgiBn25262FxGaBV/scene.splinecode" />,
    'Slide 3',
    'Slide 4',
    'Slide 5',
  ];

  const nextSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  //////버튼 부분
  const prevSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change the interval duration (in milliseconds) to adjust the slide transition speed

    //////시간초
    return () => clearInterval(interval); // Clean up the interval when the component is unmounted
  }, []);
  //
  return (
    <ChakraProvider>
      <Flex bgColor="orange.100">
        <Button onClick={prevSlide}>Previous</Button>
        <Box className="slide" w="100%">
          {slides[currentSlide]}
        </Box>
        <Button
          style={{
            zIndex: 1,
          }}
          nClick={nextSlide}
        >
          Next
        </Button>
      </Flex>
    </ChakraProvider>
  );*/
};

export default SlideBox;
