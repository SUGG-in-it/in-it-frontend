import styled from 'styled-components';
import GrayLine from '@/components/common/GreyLine';
import Button from '@/components/common/button/Button';
import { useState } from 'react';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';

const TAB_MENU = [{ name: '홈' }, { name: '답변하기' }];

const Nav = () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(0);

  const handleQuestionClick = () => {
    router.push('/question/write');
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
            <li
              key={index}
              className={currentTab === index ? 'clicked-menu' : 'menu'}
              onClick={() => handleMenuClick(index)}
            >
              {menu.name}
            </li>
          ))}
        </TabMenu>
        <AnswerButton onClick={handleQuestionClick}>{'질문하기'}</AnswerButton>
      </NavContainer>
      <GrayLine />
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgrondLightColor};
`;

const NavContainer = styled.div`
  display: flex;
  height: 60px;
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
  color: #abb0b5;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  .menu {
    color: #abb0b5;
    width: 100px;
  }
  .clicked-menu {
    color: ${({ theme }) => theme.textColor};
    width: 100px;
  }
  ${media.mobile} {
    .menu {
      width: 60px;
    }
    .clicked-menu {
      width: 60px;
    }
  }
`;

const AnswerButton = styled(Button)`
  width: 120px;
  height: 100%;
  border-radius: 0;
`;

export default Nav;
