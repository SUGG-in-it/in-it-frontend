import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/globalStyle';
import { Toaster } from 'react-hot-toast';
import CriticalErrorBoundary from '@/components/common/ErrorBoundary/CriticalErrorBoundary';
import RootErrorBoundary from '@/components/common/ErrorBoundary/RootErrorBoundary';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect, useState } from 'react';
import { CustomError } from '@/api/config/error';

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        retry: 1,
        refetchOnWindowFocus: false,
      },
      mutations: {
        useErrorBoundary: (error: CustomError) => error.statusCode >= 500,
      },
    },
  });

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    /* const { worker } = require('../__mocks__/browser');
    worker.start(); */
  }

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <RootErrorBoundary>
              <CriticalErrorBoundary>
                {typeof window === 'undefined' ? <></> : <Component {...pageProps} />}
                <Toaster position="top-right" />
              </CriticalErrorBoundary>
            </RootErrorBoundary>
          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
