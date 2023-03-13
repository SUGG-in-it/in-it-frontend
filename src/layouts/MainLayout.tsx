import RightAside from '@/components/common/RightAside';
import LeftAside from '@/components/common/LeftAside';
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
        <LeftAside />
        {children}
        <RightAside />
      </ContentSection>
      <Footer />
    </>
  );
};

const ContentSection = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f8f8f7;
  min-height: 80vh;
  padding-top: 4em;
`;

export default MainLayout;
