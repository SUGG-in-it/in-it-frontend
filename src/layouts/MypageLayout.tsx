import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import TabMenu from '@/components/common/TabMenu';
import styled from 'styled-components';
import { ReactElement } from 'react';
import { media } from '@/styles/mediaQuery';

/* -------------------------------------------------------------------------------------------------
 * MypageLayout -> mypage 레아아웃 (mypage 화면)
 * -----------------------------------------------------------------------------------------------*/

interface MypageLayoutProps {
  children: ReactElement;
}

const MypageLayout = ({ children }: MypageLayoutProps) => {
  return (
    <MyPageWrapper>
      <Header />
      <MyPageContainer>
        <TabMenu />
        <SectionPanel>{children}</SectionPanel>
      </MyPageContainer>
      <Footer />
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.div`
  background-image: ${({ theme }) => `linear-gradient(to bottom, ${theme.primaryColor} 25%, white 25%)`};
  padding-bottom: 100px;
`;

const MyPageContainer = styled.main`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 80vw;
  max-width: 1100px;
  margin: 0 auto;
  ${media.mobile} {
    width: 90vw;
  }
`;

const SectionPanel = styled.section`
  background-color: ${({ theme }) => theme.backgrondLightColor};
  min-height: 50vh;
`;

export default MypageLayout;
