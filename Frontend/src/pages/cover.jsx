import { BrowserRouter, Routes, Link } from 'react-router-dom';

import { ChakraProvider, Flex, Button } from '@chakra-ui/react';
import Spline from '@splinetool/react-spline';

const Cover = () => {
  return (
    <ChakraProvider>
      <Flex flexWrap="wrap">
        <Link to="/main">
          <Spline
            style={{
              position: 'fixed',
            }}
            scene="https://prod.spline.design/sl1oSdrbF4r2puz6/scene.splinecode"
          />
        </Link>
      </Flex>
    </ChakraProvider>
  );
};
export default Cover;
