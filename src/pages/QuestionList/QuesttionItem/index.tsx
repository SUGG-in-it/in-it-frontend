import { PointColor } from '@/assets/colors';
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

const QuestionItem = ({ id, isCompleted, nickName, date, title, content, tags }: QuestionProps) => {
  const navigate = useNavigate();

  const handleQuestionClick = () => {
    navigate(`/question/detail/${id}`);
  };

  return (
    <QuestionWrapper onClick={handleQuestionClick}>
      <TopSection>
        <ProcessLabel isCompleted={isCompleted}>{isCompleted ? '답변 완료' : '답변 진행중'}</ProcessLabel>
        <Title>{title}</Title>
      </TopSection>
      <Content>{content}</Content>
      <TagsWrapper>
        {tags.map((tag, index) => {
          return <Tags key={index}>{`# ${tag}`}</Tags>;
        })}
      </TagsWrapper>
      <BottomSection>
        <p>{`작성자  ${nickName}`}</p>
        <p>{date}</p>
      </BottomSection>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.div`
  padding: 2em 1.2em;
  &:hover {
    cursor: pointer;
  }
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

const ProcessLabel = styled.div`
  color: white;
  width: fit-content;
  padding: 0.5em;
  font-size: 0.8rem;
  margin-right: 1em;
  background-color: ${({ isCompleted }) => (isCompleted ? '#adb5bd' : PointColor)};
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Content = styled.p`
  font-size: 1rem;
  color: #616568;
  line-height: 1.3;
`;

const TagsWrapper = styled.div`
  display: flex;
  margin: 1em 0;
`;

const Tags = styled.div`
  background-color: #eff3fa;
  color: #3e4042;
  padding: 0.3em;
  border-radius: 3px;
  margin-right: 20px;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3em;
  p {
    color: #3e4042;
    font-size: 0.8rem;
    margin-right: 2em;
  }
`;

export default QuestionItem;
