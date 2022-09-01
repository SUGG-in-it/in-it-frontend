import { media } from '@/styles/mediaQuery';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiCornerDownRight } from 'react-icons/fi';

interface QuestionProps {
  id: number;
  isCompleted: boolean;
  nickName: string;
  date: string;
  title: string;
  content: string;
  tags: string[];
}

const QuestionItem = ({ id, nickName, date, title, content }: QuestionProps) => {
  const navigate = useNavigate();

  const handleQuestionClick = () => {
    navigate(`/question/${id}`);
  };

  return (
    <QuestionWrapper onClick={handleQuestionClick}>
      <TopSection>
        <Ranking>{id}</Ranking>
        <Title>{title}</Title>
      </TopSection>
      <ContentContainer>
        <Arrow />
        <Content>{content}</Content>
      </ContentContainer>
      <AnswerCount>{`답변수 1`}</AnswerCount>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.li`
  position: relative;
  margin-top: 14px;
  padding: 4px 4px 16px 18px;
  border-bottom: 1px solid #f2f2f2;
  background: 0;
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: -0.5px;
  cursor: pointer;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
`;

const Ranking = styled.div`
  width: fit-content;
  padding: 0.2em;
  font-size: 1.4rem;
  margin-right: 1em;
  font-weight: bold;
  color: ${({ isCompleted }) => (isCompleted ? '#adb5bd' : '#4d7cfe')};
  ${media.tablet} {
    padding: 0.1em;
  }
`;

const Arrow = styled(FiCornerDownRight)`
  width: 20px;
  margin-right: 0.5em;
  color: ${({ theme }) => theme.grayColor};
`;

const ContentContainer = styled.div`
  display: flex;
`;

const Title = styled.p`
  display: block;
  overflow: hidden;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textColor};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Content = styled.p`
  display: block;
  overflow: hidden;
  position: relative;
  color: ${({ theme }) => theme.texColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(100% - 4em);
`;

const AnswerCount = styled.div`
  color: ${({ theme }) => theme.grayColor};
  font-size: 0.7rem;
  margin-right: 2em;
  margin-top: 0.5em;
`;

export default QuestionItem;
