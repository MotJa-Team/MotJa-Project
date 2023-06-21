import { BrowserRouter, Routes, Link } from 'react-router-dom';

import { ChakraProvider, Flex, Button } from '@chakra-ui/react';
import Spline from '@splinetool/react-spline';

const Cover = () => {
  return (
    <ChakraProvider>
      <Flex flexWrap="wrap">
        <Link to="/main">
          {/* <Button
            style={{
              position: 'fixed',
              zIndex: 2,
              left: '180px',
            }}
          > 
            ddddddddd녕
          </Button>{' '}*/}
          {/* <Spline
            style={{
              position: 'fixed',
              zIndex: 1,
            }}
            scene="https://prod.spline.design/pgiBn25262FxGaBV/scene.splinecode"
          /> */}
          <Spline
            style={{
              position: 'fixed',
            }}
            // scene="https://prod.spline.design/qCPaS-tSWhgbx637/scene.splinecode"
            scene="https://prod.spline.design/sl1oSdrbF4r2puz6/scene.splinecode"
          />
        </Link>
      </Flex>
    </ChakraProvider>
  );
};
export default Cover;
