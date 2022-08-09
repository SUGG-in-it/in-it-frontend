import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Nav from '@/components/Nav';

const MainPage = lazy(() => import('@/pages/Main'));
const QuestionWritePage = lazy(() => import('@/pages/QuestionWrite'));
const QuestionDetailPage = lazy(() => import('@/pages/QuestionDetail'));
const QuestionListPage = lazy(() => import('@/pages/QuestionList'));

const MainRoute = () => {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/question/write" element={<QuestionWritePage />} />
        <Route path="/question/list" element={<QuestionListPage />} />
        <Route path="/question/detail/:id" element={<QuestionDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoute;
