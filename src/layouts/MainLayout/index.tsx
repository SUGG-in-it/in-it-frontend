import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import { Outlet } from 'react-router-dom';

/* -------------------------------------------------------------------------------------------------
 * MainLayout -> main 레아아웃 (main 화면, question list, question write, question detail 화면)
 * -----------------------------------------------------------------------------------------------*/

const MainLayout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
