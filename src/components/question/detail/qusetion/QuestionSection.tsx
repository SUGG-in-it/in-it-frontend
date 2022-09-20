import { getQuestion } from '@/api/questions';
import GrayLine from '@/components/common/GreyLine';
import ContentWrapper from '@/components/question/list/ContentWrapper';
import { QLabel } from '@/styles/commonStyles';
import { Question } from '@/types/response/questions';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const QuestionSection = () => {
  const router = useRouter();
  const questionId = router.query.id;
  const [question, setQuestion] = useState<Question>(null);

  useEffect(() => {
    async function fetchQuestion() {
      const data = await getQuestion(questionId as string);
      setQuestion(data);
    }
    fetchQuestion();
  }, []);

  if (!question || !questionId) return <></>;

  return (
    <QuestionSectionContainer>
      <QuestionSectionWrapper>
        <SectionRow>
          <QLabel>Q.</QLabel>
          <Title>{question.title}</Title>
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
  margin-top: 1em;
  margin-bottom: 1em;
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

const Content = styled.p`
  line-height: 1.3;
  color: ${({ theme }) => theme.grayColor};
`;

export default QuestionSection;
