import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import { useRecoilValue } from 'recoil';
import Loading from './components/common/Loading';
import MainLayout from '@/layouts/MainLayout';
import Auth from '@/routes/AuthRoute';
import UnAuth from '@/routes/UnAtuhRoute';
import AccountLayout from '@/layouts/AccountLayout';
import { CriticalErrorBoundary, RootErrorBoundary } from '@/components/common/ErrorrBoundary';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/styles/theme';
import { darkModeState } from '@/store/theme';
import DarkModeButton from '@/components/common/Button/DarkModeButton';

const SignUpPage = lazy(() => import('@/pages/Signup'));
const LoginPage = lazy(() => import('@/pages/Login'));
const ForgotPasswordPage = lazy(() => import('@/pages/ForgotPassword'));
const MyPage = lazy(() => import('@/pages/MyPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));
const MainPage = lazy(() => import('@/pages/Main'));
const QuestionWritePage = lazy(() => import('@/pages/QuestionWrite'));
const QuestionDetailPage = lazy(() => import('@/pages/QuestionDetail'));
const QuestionListPage = lazy(() => import('@/pages/QuestionList'));

const App = () => {
  const isDarkMode = useRecoilValue(darkModeState);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <RootErrorBoundary>
        <CriticalErrorBoundary>
          <Suspense fallback={<Loading />}>{routes()}</Suspense>
        </CriticalErrorBoundary>
      </RootErrorBoundary>
    </ThemeProvider>
  );
};

const mainRoutes = () => {
  return (
    <>
      <Route path="/" element={<Auth Component={<MainPage />} />} />
      <Route path="/question/list" element={<Auth Component={<QuestionListPage />} />} />
    </>
  );
};

const questionRoutes = () => {
  return (
    <>
      <Route path="/question/write" element={<Auth Component={<QuestionWritePage />} />} />
      <Route path="/question/:id" element={<Auth Component={<QuestionDetailPage />} />} />
    </>
  );
};

const acccountRoutes = () => {
  return (
    <>
      <Route path="/sign-up" element={<UnAuth Component={<SignUpPage />} />} />
      <Route path="/login" element={<UnAuth Component={<LoginPage />} />} />
      <Route path="/forgot-password" element={<UnAuth Component={<ForgotPasswordPage />} />} />
    </>
  );
};

const routes = () => {
  return (
    <BrowserRouter>
      <DarkModeButton />
      <Routes>
        <Route element={<MainLayout />}>{mainRoutes()}</Route>
        <Route element={<AccountLayout />}>{acccountRoutes()}</Route>
        <Route element={<QuestionLayout />}>{questionRoutes()}</Route>
        <Route path="/my-page/:tabIndex" element={<Auth Component={<MyPage />} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
