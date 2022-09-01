import BannerSection from '@/pages/QuestionList/BannerSection';
import QuestionListSection from '@/pages/QuestionList/QuestionListSection';
import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';

const QuestionListPage = () => {
  return (
    <QuestionListContainer>
      {/* <BannerSection /> */}
      <ContentSection>
        <QuestionListSection />
      </ContentSection>
    </QuestionListContainer>
  );
};

const QuestionListContainer = styled.div``;

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 100px;
  padding-top: 50px;
  ${media.tablet} {
    padding-top: 30px;
  }
`;

export default QuestionListPage;
