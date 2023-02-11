import BannerSection from '@/components/question/write/BannerSection';
import QuestionLayout from '@/components/layouts/QuestionLayout';
import LoginRequestModal from '@/components/common/dialog/LoginRequestDialog';
import { useRecoilValue } from 'recoil';
import { loginState } from '@/store/users';
import QuestionWriteSection from '@/components/question/write/QuestionWriteSection';
import withHead from '@/components/hoc/withHead';

const QuestionWritePage = () => {
  const isLogin = useRecoilValue(loginState);

  return (
    <QuestionLayout>
      <main>
        <BannerSection />
        <QuestionWriteSection />
        {isLogin ? null : <LoginRequestModal />}
      </main>
    </QuestionLayout>
  );
};

export default withHead(QuestionWritePage,'init : 질문 작성하기','');
