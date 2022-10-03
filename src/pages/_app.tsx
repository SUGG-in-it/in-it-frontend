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

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <RootErrorBoundary>
              <CriticalErrorBoundary>
                <Head>
                  <title>코드리뷰 사이트 : init()</title>
                </Head>
                <Component {...pageProps} />
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
