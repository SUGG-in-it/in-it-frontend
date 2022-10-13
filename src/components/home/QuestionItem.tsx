import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { FiCornerDownRight } from 'react-icons/fi';
import { useRouter } from 'next/router';

const ContentViewer = dynamic(() => import('@/components/common/ContentViewer'), { ssr: false });

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
        <ContentViewer content={content} length={30} />
      </ContentContainer>
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
  height: 33px;
`;

export default QuestionItem;
