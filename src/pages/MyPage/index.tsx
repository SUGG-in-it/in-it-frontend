import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TabPanel from '@/pages/MyPage/TabPanel';
import Section from '@/pages/MyPage/Section';
import styled from 'styled-components';

const MyPage = () => {
  return (
    <MyPageContainer>
      <Header />
      <TabPanel />
      <Section />
      <Footer />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  background-color: ${({ theme }) => theme.backgrondLightColor};
`;

export default MyPage;
