import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Loading from './components/Loading';
import Error from './components/Error';

const SignUpPage = lazy(() => import('./pages/SignUp'));
const SignInPage = lazy(() => import('./pages/SignIn'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPassword'));
const MainPage = lazy(() => import('./pages/Main'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));

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
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
