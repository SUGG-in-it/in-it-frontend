import { media } from '@/styles/mediaQuery';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
      <Content>{content}</Content>
      <BottomSection>
        <p>{`작성자  ${nickName}`}</p>
        <p>{date}</p>
      </BottomSection>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.li`
  &:hover {
    cursor: pointer;
  }
  border-top: 1px solid ${({ theme }) => theme.greyLineColor};
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  ${media.tablet} {
    margin-bottom: 0.5em;
  }
  ${media.mobile} {
    margin-bottom: 0.3em;
  }
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

const Title = styled.p`
  font-size: 0.9em;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`;

const Content = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.grayColor};
  line-height: 1.3;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
  p {
    color: #3e4042;
    font-size: 0.8rem;
    margin-right: 2em;
  }
`;

export default QuestionItem;
