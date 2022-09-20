import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const ContentWrapper = dynamic(() => import('@/components/question/list/ContentWrapper'), { ssr: false });

interface QuestionProps {
  questionId: number;
  isCompleted: boolean;
  nickname: string;
  date: string;
  title: string;
  content: string;
  tagList: string;
}

const QuestionItem = ({ questionId, isCompleted, nickname, date, title, content, tagList }: QuestionProps) => {
  const router = useRouter();

  const handleQuestionClick = () => {
    router.push(`/question/detail/${questionId}`);
  };

  return (
    <QuestionWrapper onClick={handleQuestionClick}>
      <TopSection>
        <ProcessLabel isCompleted={isCompleted}>{isCompleted ? '답변 완료' : '답변 진행중'}</ProcessLabel>
        <Title>{title}</Title>
      </TopSection>
      <ContentWrapper content={content} />
      <TagsWrapper>
        <Tags>{`# ${tagList}`}</Tags>
      </TagsWrapper>
      <BottomSection>
        <p>{`작성자  ${nickname}`}</p>
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
