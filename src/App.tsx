import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import NotFoundPage from '@/pages/NotFound';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import Loading from './components/Loading';
import Error from './components/Error';

const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));

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
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
