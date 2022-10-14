import MainLayout from '@/components/layouts/MainLayout';
import BannerSection from '@/components/home/BannerSection';
import QuestionSection from '@/components/home/QuestionSection';
import styled from 'styled-components';

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
