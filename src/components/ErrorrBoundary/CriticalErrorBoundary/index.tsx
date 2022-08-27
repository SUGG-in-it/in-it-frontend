import { PropsWithChildren } from 'react';
import { useQueryErrorResetBoundary } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { CustomError } from '@/api/Error';
import styled from 'styled-components';
import ServerErrorImg from '@/assets/images/500error.png';

/* -------------------------------------------------------------------------------------------------
 * CriticalErrorBoundary ->  500 에러 등 중요한 에러를 처리하기 위한 ErrorBoundar
 * -----------------------------------------------------------------------------------------------*/

const ErrorFallback = () => {
  return (
    <ErrorContainer>
      <img src={ServerErrorImg} />
      <p>에러가 지속되면 wldud060960@gmail.com로 문의해주세요. </p>
    </ErrorContainer>
  );
};

const CriticalErrorBoundary = ({ children }: PropsWithChildren<unknown>) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        reset();
      }}
      onError={(error: CustomError) => {
        if (error?.statusCode !== 500) {
          throw error;
        }
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

const ErrorContainer = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  img {
    width: 80vw;
  }
  p {
    font-weight: bold;
    color: ${({ theme }) => theme.pointColor};
  }
`;

export default CriticalErrorBoundary;
