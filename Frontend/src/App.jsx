import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cover from './pages/cover';
import Main from './pages/main';

import Header from './components/header';
import MyPage from './pages/myPage';
import { Box } from '@chakra-ui/react';
import { useState } from 'react';
function App() {
  const [account, setAccount] = useState('');
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Cover />} />

        {/* main에서 owner 필요 == account 내려줘~ */}
        <Route
          path="/main"
          element={<Main account={account} setAccount={setAccount} />}
        />
        <Route
          path="/mypage"
          element={<MyPage account={account} setAccount={setAccount} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
