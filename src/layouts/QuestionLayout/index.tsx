import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

/* -------------------------------------------------------------------------------------------------
 * MainLayout -> question 레아아웃 (question write, question detail 화면)
 * -----------------------------------------------------------------------------------------------*/

const QuestionLayout = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default QuestionLayout;
