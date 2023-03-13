import BannerSection from '@/components/question/write/QuestionWirteHeader';
import QuestionLayout from '@/layouts/QuestionLayout';
import LoginRequestModal from '@/components/common/Dialog/LoginRequestDialog';
import { useRecoilValue } from 'recoil';
import { loginState } from '@/store/users';
import withHead from '@/components/hoc/withHead';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
const QuestionEditor = dynamic(() => import('@/components/question/write/QuestionEditor'), { ssr: false });

const QuestionWritePage = () => {
  const isLogin = useRecoilValue(loginState);

  return (
    <QuestionLayout>
      <main>
        <BannerSection />
        <QuestionEditorWrapper>
          <QuestionEditor />
        </QuestionEditorWrapper>
        {isLogin ? null : <LoginRequestModal />}
      </main>
    </QuestionLayout>
  );
};

const QuestionEditorWrapper = styled.section`
  width: 85vw;
  max-width: 800px;
  display: flex;
  margin: 0 auto;
  margin-top: 3em;
  padding-bottom: 5em;
  flex-direction: column;
`;

export default withHead(QuestionWritePage, 'init : 질문 작성하기', '');
