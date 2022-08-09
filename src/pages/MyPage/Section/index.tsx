import QuestionSection from '@/pages/Main/Section/QuestionSection';
import AnswerSection from '@/pages/MyPage/Section/AnswerSection';
import CommentSection from '@/pages/MyPage/Section/CommentSection';
import ProfileSection from '@/pages/MyPage/Section/ProfileSection';
import styled from 'styled-components';

const createSection = (tabIndex: number) => {
  if (tabIndex === 0) return <ProfileSection />;
  if (tabIndex === 1) return <QuestionSection />;
  if (tabIndex === 2) return <AnswerSection />;
  if (tabIndex === 3) return <CommentSection />;
};

const Section = ({ tabIndex }: { tabIndex: number }) => {
  console.log(tabIndex);
  return (
    <SectionWrapper>
      <SectionPanel>{createSection(tabIndex)}</SectionPanel>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  height: calc(100vh - 110px);
  padding-left: 10%;
  padding-right: 10%;
`;

const SectionPanel = styled.div`
  background-color: white;
  min-height: 50vh;
  margin-top: 5em;
  border-radius: 0.3em;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export default Section;
