import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Index from '../src/pages/index';
import SignUp from './pages/SignUp/SignUp';
// 다른 컴포넌트들을 여기에 임포트

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        {/* 다른 라우트들 */}
      </Routes>
    </Router>
  );
};

export default App;
