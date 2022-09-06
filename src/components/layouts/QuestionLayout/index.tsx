import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Nav from '@/components/common/Nav';
import { ReactElement } from 'react';

/* -------------------------------------------------------------------------------------------------
 * QuestionLayout -> question 레아아웃 (question write, question detail 화면)
 * -----------------------------------------------------------------------------------------------*/

interface QuestionLayoutProps {
  children: ReactElement;
}

const QuestionLayout = ({ children }: QuestionLayoutProps) => {
  return (
    <>
      <Header />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default QuestionLayout;
