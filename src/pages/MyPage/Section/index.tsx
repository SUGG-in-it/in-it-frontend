import QuestionSection from '@/pages/MyPage/Section/QuestionSection';
import AnswerSection from '@/pages/MyPage/Section/AnswerSection';
import CommentSection from '@/pages/MyPage/Section/CommentSection';
import ProfileSection from '@/pages/MyPage/Section/ProfileSection';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '@/styles/mediaQuery';

const createSection = (tabIndex?: string) => {
  if (tabIndex === 'profile') return <ProfileSection />;
  if (tabIndex === 'question') return <QuestionSection />;
  if (tabIndex === 'answer') return <AnswerSection />;
  if (tabIndex === 'comment') return <CommentSection />;
};

const Section = () => {
  const { tabIndex } = useParams<{ tabIndex?: string }>();

  return (
    <SectionWrapper>
      <SectionPanel>{createSection(tabIndex)}</SectionPanel>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  height: calc(100vh - 110px);
  width: 80vw;
  max-width: 900px;
  margin: 0 auto;
  ${media.mobile} {
    width: 90vw;
  }
`;

const SectionPanel = styled.div`
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  min-height: 50vh;
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  border-radius: 8px;
`;

export default Section;
