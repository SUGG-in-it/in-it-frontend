import MainLayout from '@/components/layouts/MainLayout';
import BannerSection from '@/components/home/BannerSection';
import styled from 'styled-components';
import QuestionSection from '@/components/home/QuestionSection';

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

const MainContainer = styled.div`
  background-color: white;
`;

export default HomePage;
