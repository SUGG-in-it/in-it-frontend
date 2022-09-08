import styled from 'styled-components';
import appLogo from '@/assets/images/bigLogo.png';
import GrayLine from '@/components/common/GreyLine';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <HeadeContainer>
      <HeaderWrapper>
        <LeftSection>
          <LogoSection onClick={handleLogoClick}>
            <Image src={appLogo} width={110} height={55} />
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
`;

export default Header;
