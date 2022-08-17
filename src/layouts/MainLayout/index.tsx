import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import { Outlet } from 'react-router-dom';

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
