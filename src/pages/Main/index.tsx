import BannerSection from '@/pages/Main/BannerSection';
import QuestionSection from '@/pages/Main/QuestionSection';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <MainContainer>
      <BannerSection />
      <QuestionSection />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.backgrondLightColor};
`;

export default MainPage;
