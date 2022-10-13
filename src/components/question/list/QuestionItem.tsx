import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import Tags from '@/components/common/tag/Tags';

const ContentViewer = dynamic(() => import('@/components/common/ContentViewer'), { ssr: false });

interface QuestionProps {
  questionId: number;
  type: string;
  nickname: string;
  updateDate: string;
  title: string;
  content: string;
  tagList: string;
  point: number;
}

const QuestionItem = ({ questionId, type, nickname, updateDate, title, content, tagList, point }: QuestionProps) => {
  console.log(point);
  const router = useRouter();

  const handleQuestionClick = () => {
    router.push(`/question/detail/${questionId}`);
  };

  return (
    <QuestionWrapper onClick={handleQuestionClick}>
      <QuestionSection>
        <LeftSection>
          <TopSection>
            <ProcessLabel type={type}>{type === 'completed' ? '답변 완료' : '답변 진행중'}</ProcessLabel>
            <Title>{title}</Title>
          </TopSection>
          <ContentViewer content={content} length={100} />
          <TagsWrapper>
            <Tags tagList={tagList.split(',')} />
          </TagsWrapper>
          <BottomSection>
            <span>{`작성자  ${nickname}`}</span>
            <span> · </span>
            <span>{updateDate}</span>
          </BottomSection>
        </LeftSection>
        <RightSection>
          {point ? (
            <PointContainer>
              <h5>{`${point}`}</h5>
              <p>{`포인트`}</p>
            </PointContainer>
          ) : (
            <PointContainer>
              <h5>{`0`}</h5>
              <p>{'포인트'}</p>
            </PointContainer>
          )}
        </RightSection>
      </QuestionSection>
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

const QuestionSection = styled.div`
  display: flex;
`;

const LeftSection = styled.div`
  width: 100%;
`;

const RightSection = styled.div`
  width: 8em;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

const PointContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: 1px solid #dee2e6;
  h5 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  p {
    font-size: 0.8rem;
    font-weight: 700;
    color: #616568;
  }
`;

const ProcessLabel = styled.div`
  color: white;
  width: fit-content;
  padding: 0.5em;
  font-size: 0.8rem;
  margin-right: 1em;
  background-color: ${({ type }) => (type === 'completed' ? '#adb5bd' : '#4d7cfe')};
`;

const Title = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  width: calc(100% - 100px);
  color: ${({ theme }) => theme.textColor};
`;

const TagsWrapper = styled.div`
  display: flex;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
  span {
    color: #3e4042;
    font-size: 0.8rem;
    margin-right: 0.5em;
  }
`;

export default QuestionItem;
