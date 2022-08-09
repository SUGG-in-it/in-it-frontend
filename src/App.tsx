import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Loading from './components/Loading';
import Error from './components/Error';
import AppRoute from '@/routes/AppRoute';
import MainRoute from '@/routes/MainRoute';

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
      <AppRoute />
      <MainRoute />
    </BrowserRouter>
  );
};

export default App;
