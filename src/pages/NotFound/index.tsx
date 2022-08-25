import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageNotFoundImg from '@/assets/images/404error.png';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  return (
    <NotFoundContainer>
      <div>
        <img src={PageNotFoundImg} />
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
  img {
    width: 80vw;
  }
`;

export default NotFoundPage;
