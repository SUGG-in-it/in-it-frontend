import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Loading from './components/Loading';
import Error from './components/Error';
import MainLayout from '@/components/MainLayout';

const SignUpPage = lazy(() => import('@/pages/SignUp'));
const LoginPage = lazy(() => import('@/pages/Login'));
const ForgotPasswordPage = lazy(() => import('@/pages/ForgotPassword'));
const MyPage = lazy(() => import('@/pages/MyPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));
const MainPage = lazy(() => import('@/pages/Main'));
const QuestionWritePage = lazy(() => import('@/pages/QuestionWrite'));
const QuestionDetailPage = lazy(() => import('@/pages/QuestionDetail'));
const QuestionListPage = lazy(() => import('@/pages/QuestionList'));

const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary FallbackComponent={Error}>
          <Suspense fallback={<Loading />}>{routes()}</Suspense>
        </ErrorBoundary>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/question/write" element={<QuestionWritePage />} />
          <Route path="/question/list" element={<QuestionListPage />} />
          <Route path="/question/detail/:id" element={<QuestionDetailPage />} />
        </Route>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/my-page/:tabIndex" element={<MyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
