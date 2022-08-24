import { PropsWithChildren } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { CustomError } from '@/api/Error';

/* -------------------------------------------------------------------------------------------------
 * RootErrorBoundary ->  Runtime Error 등 일반적인 에러를 처리하기 위한 ErrorBoundar
 * -----------------------------------------------------------------------------------------------*/

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const RootErrorBoundary = ({ children }: PropsWithChildren<unknown>) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        reset();
      }}
      onError={(error: CustomError) => {
        console.log('RootErrorBoundary Error', error);
        if (error?.statusCode) {
          throw error;
        }
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default RootErrorBoundary;
