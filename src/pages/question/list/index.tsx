import { getQuestionPage } from '@/api/questions';
import MainLayout from '@/components/layouts/MainLayout';
import QuestionListSection from '@/components/question/list/QuestionListSection';
import { media } from '@/styles/mediaQuery';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const QuestionListPage = () => {
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    async function fetchQuestionPage() {
      const count = await getQuestionPage({ size: 10, type: 'total' });
      setTotalPage(count);
    }
    fetchQuestionPage();
  }, []);

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
