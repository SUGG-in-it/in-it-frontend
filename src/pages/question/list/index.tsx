import MainLayout from '@/components/layouts/MainLayout';
import QuestionListSection from '@/components/question/list/QuestionListSection';
import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';

const QuestionListPage = () => {
  return (
    <MainLayout>
      <QuestionListContainer>
        <ContentSection>
          <QuestionListSection />
        </ContentSection>
      </QuestionListContainer>
    </MainLayout>
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
