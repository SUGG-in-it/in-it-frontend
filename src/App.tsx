import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
