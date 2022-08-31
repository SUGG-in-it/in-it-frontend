import Button from '@/components/Button';
import { loginState } from '@/store/users';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import appLogo from '@/assets/images/bigLogo.png';
import GrayLine from '@/components/GrayLine';

const Header = () => {
  const navigate = useNavigate();
  const isLogin = useRecoilValue(loginState);

  const goToLogin = () => {
    navigate('/login');
  };
  const goToMyPage = () => {
    navigate('/my-page/profile');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <HeaderContainer>
        <LeftSection>
          <LogoSection onClick={handleLogoClick}>
            <img src={appLogo} />
          </LogoSection>
        </LeftSection>
        {isLogin ? (
          <MypPageButton onClick={goToMyPage}>{'마이페이지'}</MypPageButton>
        ) : (
          <LoginButton onClick={goToLogin}>{'로그인'}</LoginButton>
        )}
      </HeaderContainer>
      <GrayLine />
    </>
  );
};

const HeaderContainer = styled.div`
  height: 70px;
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  max-width: 1100px;
  padding: 0 2em;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
`;

const LogoSection = styled.div`
  cursor: pointer;
  h1 {
    font-size: 1.3rem;
    font-weight: 800;
    color: ${({ theme }) => theme.pointColor};
  }
  p {
    font-size: 0.6rem;
    font-weight: 800;
    color: ${({ theme }) => theme.pointColor};
  }
  img {
    width: 110px;
    height: 55px;
  }
`;

const MypPageButton = styled(Button)`
  border-radius: 0;
  color: ${({ theme }) => theme.pointColor};
  background-color: ${({ theme }) => theme.backgrondLightColor};
  width: 100px;
  height: 40px;
`;

const LoginButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.backgrondLightColor};
  width: 100px;
  height: 40px;
`;
export default Header;
