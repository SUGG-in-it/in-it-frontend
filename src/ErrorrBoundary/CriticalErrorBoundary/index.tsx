import { PropsWithChildren } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { CustomError } from '@/api/Error';

/* -------------------------------------------------------------------------------------------------
 * CriticalErrorBoundary ->  500 에러 등 중요한 에러를 처리하기 위한 ErrorBoundar
 * -----------------------------------------------------------------------------------------------*/

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h1> 데이터를 불러오는데 실패하였습니다. </h1>
      <p> 에러가 지속되면 고객센터로 문의하세요. </p>
    </div>
  );
}

const CriticalErrorBoundary = ({ children }: PropsWithChildren<unknown>) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        reset();
      }}
      onError={(error: CustomError) => {
        console.log('CriticalErrorBoundary Error', error);
        if (error?.statusCode !== 500) {
          throw error;
        }
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default CriticalErrorBoundary;
