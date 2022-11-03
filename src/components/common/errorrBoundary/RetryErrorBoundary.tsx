import { PropsWithChildren } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import { FiRotateCcw } from 'react-icons/fi';
import { media } from '@/styles/mediaQuery';

const RetryErrorBoundary = ({ children }: PropsWithChildren<unknown>) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <RetryBox>
          <p> 데이터를 불러오는데 실패했어요 😭😭😭</p>
          <RetryButton onClick={() => resetErrorBoundary()}> 다시 시도 </RetryButton>
        </RetryBox>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

const RetryButton = styled(FiRotateCcw)`
  width: 30px;
  height: 30px;
  margin-top: 30px;
  color: ${({ theme }) => theme.greyLineColor};
  cursor: pointer;
`;

const RetryBox = styled.div`
  max-width: 850px;
  width: calc(100% - 4em);
  height: fit-content;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding: 2em;
  margin-top: 30px;
  ${media.tablet} {
    width: 80vw;
  }
  ${media.mobile} {
    padding: 1em;
  }
  p {
    font-size: 0.9rem;
    font-weight: 700;
  }
`;

export default RetryErrorBoundary;
