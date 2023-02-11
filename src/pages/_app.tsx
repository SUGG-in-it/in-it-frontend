import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/globalStyle';
import { Toaster } from 'react-hot-toast';
import CriticalErrorBoundary from '@/components/common/errorrBoundary/CriticalErrorBoundary';
import RootErrorBoundary from '@/components/common/errorrBoundary/RootErrorBoundary';
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
