import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';
import { FiCornerDownRight } from 'react-icons/fi';
import { useRouter } from 'next/router';
import removeMarkdown from '@/utils/removeMarkdown';

interface QuestionProps {
  order: number;
  questionId: number;
  title: string;
  content: string;
}

const QuestionItem = ({ order, questionId, title, content }: QuestionProps) => {
  const router = useRouter();

  const handleQuestionClick = () => {
    router.push(`/question/detail/${questionId}`);
  };

  return (
    <QuestionWrapper onClick={handleQuestionClick}>
      <TopSection>
        <Ranking>{order}</Ranking>
        <Title>{title}</Title>
      </TopSection>
      <ContentContainer>
        <Arrow />
        <Content>{removeMarkdown(content)}</Content>
      </ContentContainer>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.li`
  position: relative;
  margin: 10px 0;
  padding: 4px 4px 16px 18px;
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

const Ranking = styled.p`
  width: fit-content;
  padding: 0.2em 0.5em;
  font-size: 1.4rem;
  margin-right: 1em;
  font-weight: bold;
  color: ${({ isCompleted, theme }) => (isCompleted ? '#adb5bd' : theme.primaryColor)};
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

const Content = styled.p`
  margin-bottom: 6px;
  width: 100%;
  font-weight: 500;
  font-size: 0.75rem;
  color: #616568;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 150%;
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

export default QuestionItem;
