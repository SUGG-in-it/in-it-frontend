import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import appLogo from '@/assets/images/smallLogo.png';

function LoginRequestModal() {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClickLogin = () => {
    router.push('/login');
    document.body.style.overflow = 'unset';
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalTitle>엇!😱 로그인이 필요한 페이지입니다</ModalTitle>
        <Image src={appLogo} alt="logo" width={100} height={100} />
        <ModalDescription>글을 작성하기 위해서는 로그인이 필요해요!</ModalDescription>
        <ModalClose onClick={handleClickLogin}>로그인 하러가기</ModalClose>
      </ModalContainer>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgb(0 0 0 / 50%);
`;

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-in-out;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  width: 20em;
  height: 20em;
  padding: 5em 2em 3em 2em;
  user-select: none;
`;

const ModalTitle = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.4rem;
  font-weight: 800;
`;

const ModalDescription = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`;

const ModalClose = styled.button`
  border-radius: 0.5em;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.backgrondLightColor};
  background-color: ${({ theme }) => theme.primaryColor};
  width: 100%;
  height: 3em;
  cursor: pointer;
`;

export default LoginRequestModal;
