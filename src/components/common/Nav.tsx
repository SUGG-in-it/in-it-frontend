import styled from 'styled-components';
import GrayLine from '@/components/common/GreyLine';
import Button from '@/components/common/Button';
import { useLayoutEffect, useState } from 'react';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import { postQuestionId } from '@/api/questions';
import LoginRequestDialog from '@/components/common/Dialog/LoginRequestDialog';
import { useRecoilValue } from 'recoil';
import { loginState } from '@/store/users';
import Link from 'next/link';

const TAB_MENU = [
  { name: '홈', link: '/' },
  { name: '답변하기', link: '/question/list' },
];

const Nav = () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(0);
  const [isShowLoginRequestModal, setIsShowLoginRequestModal] = useState(false);
  const isLogin = useRecoilValue(loginState);

  useLayoutEffect(() => {
    if (router.pathname === '/') setCurrentTab(0);
    else setCurrentTab(1);
  });

  const handleQuestionClick = async () => {
    if (isLogin) {
      const data = await postQuestionId();
      if (data?.questionId) {
        router.push({ pathname: '/question/write', query: { id: data?.questionId } });
      }
    } else {
      setIsShowLoginRequestModal(true);
    }
  };

  const handleMenuClick = (index) => {
    setCurrentTab(index);
    switch (index) {
      case 0:
        router.push('/');
        break;
      case 1:
        router.push('/question/list');
        break;
    }
  };

  return (
    <NavWrapper>
      <NavContainer>
        <TabMenu>
          {TAB_MENU.map((menu, index) => (
            <Menu key={index}>
              <Link href={menu.link}>
                <a className={currentTab === index ? 'clicked-menu' : 'menu'} onClick={() => handleMenuClick(index)}>
                  {menu.name}
                </a>
              </Link>
            </Menu>
          ))}
        </TabMenu>
        <AnswerButton onClick={handleQuestionClick}>{'질문하기'}</AnswerButton>
      </NavContainer>
      <GrayLine />
      {isShowLoginRequestModal ? <LoginRequestDialog /> : null}
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background-color: ${({ theme }) => theme.backgrondLightColor};
  ${media.tablet} {
    display: none;
  }
`;

const NavContainer = styled.div`
  display: flex;
  height: 50px;
  display: flex;
  max-width: 1100px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-left: 3em;
  ${media.mobile} {
    padding-left: 2em;
  }
`;

const TabMenu = styled.ul`
  display: flex;
  margin: 0 1em;
  border: none;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  color: #2b2b2c;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
`;

const Menu = styled.li`
  position: relative;
  margin-right: 40px;
  & > a {
    text-decoration-line: none;
  }
  .menu {
    color: #2b2b2c;
    width: 60px;
    line-height: 50px;
    vertical-align: top;
    display: inline-block;
  }
  .clicked-menu {
    color: ${({ theme }) => theme.primaryColor};
    width: 60px;
    line-height: 50px;
    vertical-align: top;
    display: inline-block;
    ::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      border-bottom: ${({ theme }) => `3px solid ${theme.primaryColor}`};
    }
  }
  ${media.mobile} {
    .menu {
      width: 50px;
    }
    .clicked-menu {
      width: 50px;
    }
  }
`;

const AnswerButton = styled(Button)`
  width: 120px;
  height: 100%;
  border-radius: 0;
`;

export default Nav;
