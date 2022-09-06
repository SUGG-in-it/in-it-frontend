import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import TabPanel from '@/pages/mypage/TabPanel';
import Section from '@/pages/mypage/Section';
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
