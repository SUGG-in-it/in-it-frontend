import Aside from '@/components/common/Aside';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Nav from '@/components/common/Nav';
import { ReactElement } from 'react';
import styled from 'styled-components';

/* -------------------------------------------------------------------------------------------------
 * MainLayout -> main 레아아웃 (main 화면, question list, question write, question detail 화면)
 * -----------------------------------------------------------------------------------------------*/

interface MainLayoutProps {
  children: ReactElement;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Nav />
      <ContentSection>
        {children}
        <Aside />
      </ContentSection>
      <Footer />
    </>
  );
};

const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  min-height: 80vh;
`;

export default MainLayout;
