import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import { GlobalStyle } from './styles/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route path="/sign-up" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
