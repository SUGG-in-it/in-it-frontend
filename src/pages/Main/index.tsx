import { GrayBackgroundColor } from '@/assets/colors';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BannerSection from '@/pages/Main/Section/BannerSection';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <MainContainer>
      <Header />
      <Section>
        <BannerSection />
      </Section>
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background-color: ${GrayBackgroundColor};
`;

const Section = styled.div`
  width: 100vw;
  height: calc(100vh - 110px);
`;
export default MainPage;
