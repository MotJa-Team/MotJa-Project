import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cover from './pages/cover';
import Main from './pages/main';
import LoginD from './pages/LoginD';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/main" element={<Main />} />
        <Route path="/loginD" element={<LoginD />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
