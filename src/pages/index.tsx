import MainLayout from '@/layouts/MainLayout';
import QuestionSection from '@/components/home/LatestQuestionList';
import styled from 'styled-components';
import BannerSection from '@/components/home/BannerList';
import withHead from '@/components/hoc/withHead';

const HomePage = () => {
  return (
    <MainLayout>
      <MainContainer>
        <BannerSection />
        <QuestionSection />
      </MainContainer>
    </MainLayout>
  );
};

const MainContainer = styled.section``;

export default withHead(HomePage, '코드리뷰 사이트 : init()', '');
