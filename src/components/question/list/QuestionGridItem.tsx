import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Tags from '@/components/common/Tag';
import dayjs from 'dayjs';
import removeMarkdown from '@/utils/removeMarkdown';
import GrayLine from '@/components/common/GreyLine';
import { VscActivateBreakpoints } from 'react-icons/vsc';

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

const QuestionGridItem = ({
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

  return (
    <QuestionWrapper onClick={handleQuestionClick}>
      <QuestionSection>
        <LeftSection>
          <TopSection>
            <ProcessLabel type={type}>{type === 'completed' ? '답변 완료' : '답변 진행중'}</ProcessLabel>
            {point ? (
              <PointContainer>
                <p>{`${point} p`}</p>
                <VscActivateBreakpoints />
              </PointContainer>
            ) : (
              <PointContainer>
                <p>{`0 p`}</p>
                <VscActivateBreakpoints />
              </PointContainer>
            )}
          </TopSection>
          <Title>{title}</Title>
          <Content>{removeMarkdown(content)}</Content>
          <TagsWrapper>
            <Tags tagList={tagList && tagList.split(',')} />
          </TagsWrapper>
          <BottomSection>
            <span>{`작성자  ${nickname}`}</span>
            <span>{dayjs(updateDate).format('YYYY년 MM월 DD일')}</span>
          </BottomSection>
        </LeftSection>
      </QuestionSection>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.li`
  :nth-child(4n + 1) {
    border-left: 1px solid ${({ theme }) => theme.greyLineColor};
    border-right: 1px solid ${({ theme }) => theme.greyLineColor};
    border-top: 1px solid ${({ theme }) => theme.greyLineColor};
  }
  :nth-child(4n + 2) {
    border-right: 1px solid ${({ theme }) => theme.greyLineColor};
    border-top: 1px solid ${({ theme }) => theme.greyLineColor};
  }
  :nth-child(4n + 3) {
    border-left: 1px solid ${({ theme }) => theme.greyLineColor};
    border-right: 1px solid ${({ theme }) => theme.greyLineColor};
    border-top: 1px solid ${({ theme }) => theme.greyLineColor};
  }
  :nth-child(4n + 0) {
    border-right: 1px solid ${({ theme }) => theme.greyLineColor};
    border-top: 1px solid ${({ theme }) => theme.greyLineColor};
  }
  :nth-last-child(2) {
    border-bottom: 1px solid ${({ theme }) => theme.greyLineColor};
  }
  :nth-last-child(1) {
    border-bottom: 1px solid ${({ theme }) => theme.greyLineColor};
  }
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
  margin-bottom: 1em;
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

const TopSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
  justify-content: space-between;
`;

const PointContainer = styled.div`
  display: flex;
  align-items: baseline;
  p {
    font-size: 1rem;
    margin-bottom: 0.3rem;
    margin-right: 0.3rem;
  }
  ${media.mobile} {
    width: 60px;
    height: 60px;
    h5 {
      font-size: 0.9rem;
    }
  }
`;

const ProcessLabel = styled.div`
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
  margin-top: 1em;
  margin-bottom: 0.5em;
  width: calc(100% - 100px);
  color: ${({ theme }) => theme.textColor};
`;

const TagsWrapper = styled.div`
  display: flex;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
  span {
    color: #3e4042;
    font-size: 0.8rem;
    margin-right: 0.5em;
  }
`;

export default QuestionGridItem;
