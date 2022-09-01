import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import appLogo from '@/assets/images/bigLogo.png';
import GrayLine from '@/components/GrayLine';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <HeadeContainer>
      <HeaderWrapper>
        <LeftSection>
          <LogoSection onClick={handleLogoClick}>
            <img src={appLogo} />
          </LogoSection>
        </LeftSection>
      </HeaderWrapper>
      <GrayLine />
    </HeadeContainer>
  );
};

const HeadeContainer = styled.div`
  background-color: ${({ theme }) => theme.backgrondDarkColor};
`;

const HeaderWrapper = styled.div`
  height: 70px;
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

export default Header;
