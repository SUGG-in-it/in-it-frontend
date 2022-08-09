import { GrayBackgroundColor } from '@/assets/colors';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Nav from '@/pages/MyPage/Nav';
import Section from '@/pages/MyPage/Section';
import { useState } from 'react';
import styled from 'styled-components';

const MyPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setTabIndex(tabIndex);
  };

  return (
    <MyPageContainer>
      <Header />
      <Nav handleTabClick={handleTabClick} />
      <Section tabIndex={tabIndex} />
      <Footer />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  background-color: ${GrayBackgroundColor};
`;

export default MyPage;
