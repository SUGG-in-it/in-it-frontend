import Button from '@/components/common/button/Button';
import GrayLine from '@/components/common/GreyLine';
import QuestionSkelton from '@/components/common/skelton/QuestionSkelton';
import { useDeleteQuestionMutation, useQuestionQuery } from '@/hooks/queries/useQuestion';
import { userState } from '@/store/users';
import { QLabel } from '@/styles/commonStyles';
import { media } from '@/styles/mediaQuery';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FiRotateCcw } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const ContentWrapper = dynamic(() => import('@/components/question/list/ContentWrapper'), { ssr: false });

const QuestionsFallback = ({ error, resetErrorBoundary }) => (
  <QuestionContainer>
    <RetryBox>
      <p>질문을 불러오는데 실패했어요 😭😭😭 </p>
      <RetryButton onClick={() => resetErrorBoundary()} />
    </RetryBox>
  </QuestionContainer>
);

const QuestionsLoading = () => <Skeleton wrapper={QuestionSkelton} count={5} />;

const QuestionDetail = ({ id }: { id: number }) => {
  const { data: question } = useQuestionQuery(id);
  const user = useRecoilValue(userState);

  const router = useRouter();
  const mutationDeleteQuestion = useDeleteQuestionMutation({
    onSuccess: () => {
      router.back();
    },
  });

  const handleEditQuestion = () => {
    router.push({ pathname: '/question/write', query: { id: id } });
  };

  const handleDeleteQuestion = () => {
    mutationDeleteQuestion.mutate(id);
  };

  return (
    <QuestionSectionContainer>
      <QuestionSectionWrapper>
        <SectionRow>
          <TitleContainer>
            <QLabel>Q.</QLabel>
            <Title>{question.title}</Title>
          </TitleContainer>
          {user.id === question.userId && (
            <div>
              <SettingButton onClick={handleEditQuestion}>{'수정'}</SettingButton>
              <SettingButton onClick={handleDeleteQuestion}>{' | 삭제'}</SettingButton>
            </div>
          )}
        </SectionRow>
        <SectionRow>
          <NickName>{question.nickname}</NickName>
          <Date>{question.date}</Date>
        </SectionRow>
        <GrayLine />
        <SectionRow>
          <ContentWrapper content={question.content} />
        </SectionRow>
      </QuestionSectionWrapper>
    </QuestionSectionContainer>
  );
};

const QuestionSection = ({ id }: { id: number }) => {
  return (
    <ErrorBoundary FallbackComponent={QuestionsFallback}>
      <Suspense fallback={<QuestionsLoading />}>
        <QuestionDetail id={id} />
      </Suspense>
    </ErrorBoundary>
  );
};

const QuestionSectionContainer = styled.div`
  padding: 2em 1.2em;
  background-color: ${({ theme }) => theme.backgrondLightColor};
`;

const QuestionSectionWrapper = styled.div`
  max-width: 700px;
  width: 80vw;
  margin: 0 auto;
`;

const SectionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.textColor};
`;

const NickName = styled.p`
  font-size: 0.8rem;
  margin-right: 1em;
  margin-left: 0.5em;
  color: ${({ theme }) => theme.textColor};
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: #adb5bd;
`;

const SettingButton = styled(Button)`
  background-color: ${({ theme }) => theme.backgrondLightColor};
  color: #616568;
  font-weight: 400;
  font-size: 0.9rem;
`;

const QuestionContainer = styled.div`
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  padding-bottom: 6em;
`;

const RetryBox = styled.div`
  max-width: 850px;
  width: 80vw;
  height: fit-content;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  padding: 3em;
  ${media.tablet} {
    width: 80vw;
  }
  ${media.mobile} {
    padding: 1em;
  }
`;

const RetryButton = styled(FiRotateCcw)`
  width: 30px;
  height: 30px;
  margin-top: 30px;
  color: ${({ theme }) => theme.greyLineColor};
  cursor: pointer;
`;

export default QuestionSection;
