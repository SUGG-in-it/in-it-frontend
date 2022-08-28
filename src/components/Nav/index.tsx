import styled from 'styled-components';
import GrayLine from '@/components/GrayLine';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const TAB_MENU = [{ name: '홈' }, { name: '답변하기' }];

const Nav = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(0);

  const handleQuestionClick = () => {
    navigate('/question/write');
  };

  const handleMenuClick = (index) => {
    setCurrentTab(index);
    switch (index) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/question/list');
        break;
    }
  };

  return (
    <>
      <NavContainer>
        <TabMenu>
          {TAB_MENU.map((menu, index) => {
            return (
              <li
                key={index}
                className={currentTab === index ? 'clicked-menu' : 'menu'}
                onClick={() => handleMenuClick(index)}
              >
                {menu.name}
              </li>
            );
          })}
        </TabMenu>
        <AnswerButton onClick={handleQuestionClick}>{'질문하기'}</AnswerButton>
      </NavContainer>
      <GrayLine />
    </>
  );
};

const NavContainer = styled.div`
  display: flex;
  padding-left: 20%;
  padding-right: 20%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgrondLightColor};
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
`;

const AnswerButton = styled(Button)`
  width: 120px;
  height: 100%;
  border-radius: 0;
`;

export default Nav;
