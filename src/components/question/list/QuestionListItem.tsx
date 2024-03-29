import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Tags from '@/components/common/Tag';
import dayjs from 'dayjs';
import removeMarkdown from '@/utils/removeMarkdown';
import GrayLine from '@/components/common/GreyLine';

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

const QuestionListItem = ({
  questionId,
  type,
  nickname,
  updateDate,
  title,
  content,
  tagList,
  point,
}: QuestionProps) => {
  const router = useRouter();

  const handleQuestionClick = () => {
    router.push(`/question/detail/${questionId}`);
  };
  console.log('questionId', questionId);

  return (
    <QuestionWrapper onClick={handleQuestionClick}>
      <QuestionSection>
        <LeftSection>
          <TopSection>
            <ProcessLabel type={type}>{type === 'completed' ? '답변 완료' : '답변 진행중'}</ProcessLabel>
            <Title>{title}</Title>
          </TopSection>
          <Content>{removeMarkdown(content)}</Content>
          <TagsWrapper>
            <Tags tagList={tagList.split(',')} />
          </TagsWrapper>
          <BottomSection>
            <span>{`작성자  ${nickname}`}</span>
            <span> · </span>
            <span>{dayjs(updateDate).format('YYYY.MM.DD')}</span>
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
      <GrayLine />
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.li`
  &:hover {
    cursor: pointer;
  }
  ${media.mobile} {
    padding: 1.5em 0.6em;
  }
`;

const QuestionSection = styled.div`
  display: flex;
  padding: 2em 1.2em;
`;

const LeftSection = styled.div`
  width: 100%;
`;

const Content = styled.p`
  margin-bottom: 6px;
  width: 100%;
  font-weight: 500;
  font-size: 0.8rem;
  color: #616568;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 160%;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  width: 8em;
  ${media.mobile} {
    width: 6em;
  }
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
  ${media.mobile} {
    width: 60px;
    height: 60px;
    h5 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;

const ProcessLabel = styled.div<{ type: string }>`
  color: white;
  width: fit-content;
  padding: 0.5em;
  font-size: 0.8rem;
  margin-right: 1em;
  background-color: ${({ type, theme }) => (type === 'completed' ? '#adb5bd' : theme.primaryColor)};
`;

const Title = styled.p`
  font-size: 1rem;
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

export default QuestionListItem;
