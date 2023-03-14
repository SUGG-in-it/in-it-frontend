import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Dialog } from '@/components/common/Dialog';

function LoginRequestDialog() {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClickLogin = () => {
    router.push('/signin');
    document.body.style.overflow = 'unset';
  };

  return (
    <Dialog isOpen={true}>
      <Dialog.Title>😱 로그인이 필요한 페이지입니다</Dialog.Title>
      <Dialog.Description>로그인이 필요한 기능입니다</Dialog.Description>
      <Dialog.Description>로그인을 하고 이용해주세요.!</Dialog.Description>
      <Dialog.LabelButton onClick={handleClickLogin}>로그인 하러가기</Dialog.LabelButton>
    </Dialog>
  );
}

export default LoginRequestDialog;
