import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cover from './pages/cover';
import Main from './pages/main';
import LoginD from './pages/LoginD';
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
        <Route
          path="/main"
          element={<Main account={account} setAccount={setAccount} />}
        />
        <Route path="/loginD" element={<LoginD />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
