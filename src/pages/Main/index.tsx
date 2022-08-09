import { GrayBackgroundColor } from '@/assets/colors';
import BannerSection from '@/pages/Main/Section/BannerSection';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <MainContainer>
      <BannerSection />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: ${GrayBackgroundColor};
`;

export default MainPage;
