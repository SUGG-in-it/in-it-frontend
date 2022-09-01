import Aside from '@/components/Aside';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

/* -------------------------------------------------------------------------------------------------
 * MainLayout -> main 레아아웃 (main 화면, question list, question write, question detail 화면)
 * -----------------------------------------------------------------------------------------------*/

const MainLayout = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <Nav />
      <ContentSection>
        <Outlet />
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
`;

export default MainLayout;
