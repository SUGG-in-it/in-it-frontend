import styled from 'styled-components';
import appLogo from '@/assets/images/bigLogo.png';
import GrayLine from '@/components/common/GreyLine';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { media } from '@/styles/mediaQuery';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { loginState, userState } from '@/store/users';
import { useRecoilState } from 'recoil';
import { successToast } from '@/utils/toast';
import { postQuestionId } from '@/api/questions';
import LoginRequestDialog from '@/components/common/dialog/LoginRequestDialog';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [user, setUserState] = useRecoilState(userState);
  const [isShowLoginRequestModal, setIsShowLoginRequestModal] = useState(false);

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickHome = () => {
    handleClickMenu();
    router.push('/');
  };

  const handleClickAnswer = () => {
    handleClickMenu();
    router.push('/question/list');
  };

  const handleClickQuestion = async () => {
    handleClickMenu();
    if (isLogin) {
      const data = await postQuestionId();
      if (data?.questionId) {
        router.push({ pathname: '/question/write', query: { id: data?.questionId } });
      }
    } else {
      setIsShowLoginRequestModal(true);
    }
  };

  const handleClickMypage = () => {
    handleClickMenu();
    router.push({ pathname: '/mypage/profile', query: { nickname: user.nickname } });
  };

  const handleLogout = () => {
    localStorage.clear();
    setUserState({
      id: '',
      nickname: '',
    });
    setIsLogin(false);
    successToast('로그아웃이 완료되었습니다.');
  };

  const handleLogin = () => {
    router.push('/signin');
  };

  return (
    <HeadeContainer>
      <HeaderWrapper>
        <LeftSection>
          <LogoSection onClick={handleLogoClick}>
            <Image src={appLogo} width={110} height={50} />
          </LogoSection>
        </LeftSection>
        <RightSection>
          <MenuIcon onClick={handleClickMenu} />
          {isMenuOpen ? (
            <Menu>
              <MenuHeader>
                <Image src={appLogo} width={110} height={50} />
                <CloseButton onClick={handleClickMenu} />
              </MenuHeader>
              <ul>
                <li onClick={handleClickHome}>홈</li>
                <li onClick={handleClickAnswer}>답변하기</li>
                <li onClick={handleClickQuestion}>질문하기</li>
                <li onClick={handleClickMypage}>마이페이지</li>
                {isLogin ? (
                  <li>
                    <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
                  </li>
                ) : (
                  <li>
                    <LogoutButton onClick={handleLogin}>로그인</LogoutButton>
                  </li>
                )}
              </ul>
            </Menu>
          ) : null}
        </RightSection>
      </HeaderWrapper>
      <GrayLine />
      {isShowLoginRequestModal ? <LoginRequestDialog /> : null}
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
  ${media.tablet} {
    height: 60px;
  }
`;

const LeftSection = styled.div`
  display: flex;
`;

const RightSection = styled.div``;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em 1.5em 2em;
`;

const CloseButton = styled(IoMdClose)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.primaryColor};
`;

const LogoutButton = styled.button`
  border-radius: 3px;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  padding: 0.5em;
  width: 100%;
  height: 40px;
  cursor: pointer;
  border: none;
`;

const MenuIcon = styled(GiHamburgerMenu)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;
  ${media.desktop} {
    display: none;
  }
  ${media.tablet} {
    display: block;
  }
`;

const Menu = styled.div`
  width: 100vw;
  background-color: #f7f7f8;
  position: fixed;
  transition: all 300ms;
  z-index: 1;
  top: 0;
  right: 0;
  box-sizing: border-box;
  li {
    font-weight: 600;
    font-size: 0.9rem;
    padding: 1.3em 1.8em;
    border-bottom: 1px solid ${({ theme }) => theme.greyLineColor};
  }
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
