import Button from '@/components/common/button/Button';
import GrayLine from '@/components/common/GreyLine';
import Tags from '@/components/common/tag/Tags';
import { useDeleteQuestionMutation } from '@/hooks/queries/useQuestion';
import { userState } from '@/store/users';
import { QLabel } from '@/styles/commonStyles';
import { Question } from '@/types/response/questions';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import dayjs from 'dayjs';

const ContentViewer = dynamic(() => import('@/components/common/ContentViewer'), { ssr: false });

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
        {question.point ? (
          <PointContainer>
            <h5>{`${question.point}`}</h5>
            <p>{`포인트`}</p>
          </PointContainer>
        ) : (
          <PointContainer>
            <h5>{`0`}</h5>
            <p>{'포인트'}</p>
          </PointContainer>
        )}
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
        <DetailRow>
          <NickName>{question.nickname}</NickName>
          <span> · </span>
          <Date>{dayjs(question.updateDate).format('YYYY-MM-DD HH:mm:ss')}</Date>
        </DetailRow>
        <GrayLine />
        <SectionRow>
          <ContentViewer content={question.content} />
        </SectionRow>
        <Tags tagList={question?.tagList?.split(',')} />
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

const PointContainer = styled.div`
  position: fixed;
  right: 15vw;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid #dee2e6;
  background-color: white;
  h5 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  p {
    font-size: 0.9rem;
    font-weight: 700;
    color: #616568;
  }
`;

const SectionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const DetailRow = styled.div`
  display: flex;
  span {
    margin-right: 10px;
  }
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
