import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  const handleQuestionClick = () => {
    router.push(`/question/detail/${id}`);
  };

  return (
    <QuestionWrapper onClick={handleQuestionClick}>
      <TopSection>
        <ProcessLabel isCompleted={isCompleted}>{isCompleted ? '답변 완료' : '답변 진행중'}</ProcessLabel>
        <Title>{title}</Title>
      </TopSection>
      <Content>{content}</Content>
      <TagsWrapper>
        {tags.map((tag, index) => (
          <Tags key={index}>{`# ${tag}`}</Tags>
        ))}
      </TagsWrapper>
      <BottomSection>
        <p>{`작성자  ${nickName}`}</p>
        <p>{date}</p>
      </BottomSection>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.li`
  padding: 2em 1.2em;
  &:hover {
    cursor: pointer;
  }
  ${media.tablet} {
    padding: 1em 0em;
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
  background-color: ${({ isCompleted }) => (isCompleted ? '#adb5bd' : '#4d7cfe')};
`;

const Title = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`;

const Content = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.grayColor};
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
