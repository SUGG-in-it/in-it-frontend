import Button from '@/components/common/button/Button';
import styled from 'styled-components';
import PageNotFoundImg from '@/assets/images/404error.png';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NotFoundPage = () => {
  const router = useRouter();
  const goToMain = () => {
    router.push('/');
  };

  return (
    <NotFoundContainer>
      <div>
        <Image src={PageNotFoundImg} width={1000} height={550} />
      </div>
      <Button onClick={goToMain}>{'메인화면으로 돌아가기'}</Button>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export default NotFoundPage;
