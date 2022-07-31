import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import { GlobalStyle } from './styles/globalStyles';
import NotFoundPage from '@/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
