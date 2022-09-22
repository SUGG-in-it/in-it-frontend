import Button from '@/components/common/button/Button';
import GrayLine from '@/components/common/GreyLine';
import { useDeleteQuestionMutation } from '@/hooks/queries/useQuestion';
import { userState } from '@/store/users';
import { QLabel } from '@/styles/commonStyles';
import { Question } from '@/types/response/questions';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const ContentWrapper = dynamic(() => import('@/components/question/list/ContentWrapper'), { ssr: false });

const QuestionSection = ({ question }: { question: Question }) => {
  const user = useRecoilValue(userState);

  const router = useRouter();
  const mutationDeleteQuestion = useDeleteQuestionMutation({
    onSuccess: () => {
      router.back();
    },
  });

  const handleEditQuestion = () => {
    router.push({ pathname: '/question/write', query: { id: question.questionId } });
  };

  const handleDeleteQuestion = () => {
    mutationDeleteQuestion.mutate(question.questionId);
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
              <SettingButton>|</SettingButton>
              <SettingButton onClick={handleDeleteQuestion}>{'삭제'}</SettingButton>
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

export default QuestionSection;
