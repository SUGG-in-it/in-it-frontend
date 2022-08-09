import { PointColor, PrimaryColor } from '@/assets/colors';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  return (
    <NotFound>
      <div>
        <h1>404 Error</h1>
        <h2>Page not found 😅</h2>
        <p>페이지를 찾을 수 없습니다.</p>
      </div>
      <Button color={PointColor} onClick={goToMain} margin={'0em 0em 1.5em'}>
        {'메인화면으로 돌아가기'}
      </Button>
    </NotFound>
  );
};

const NotFound = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  h1 {
    font-size: 5rem;
    color: ${PrimaryColor};
  }
  h2 {
    font-size: 3.5rem;
    color: ${PrimaryColor};
  }
  p {
    font-size: 1.5rem;
    margin-top: 3em;
    margin-bottom: 2em;
  }
`;

export default NotFoundPage;
