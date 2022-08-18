import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TAB_MENU = [{ name: '프로필' }, { name: '나의 질문' }, { name: '나의 답변' }, { name: '나의 댓글' }];

const TabPanel = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const navigate = useNavigate();

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
    switch (index) {
      case 0:
        navigate('/my-page/profile');
        break;
      case 1:
        navigate('/my-page/question');
        break;
      case 2:
        navigate('/my-page/answer');
        break;
      case 3:
        navigate('/my-page/comment');
        break;
    }
  };

  return (
    <TabContainer>
      <TabMenu>
        {TAB_MENU.map((menu, index) => {
          return (
            <li
              key={index}
              className={currentTab === index ? 'clicked-menu' : 'menu'}
              onClick={() => selectMenuHandler(index)}
            >
              {menu.name}
            </li>
          );
        })}
      </TabMenu>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  display: flex;
  margin: 3em auto;
  height: 50px;
  width: 80vw;
  max-width: 900px;
  align-items: center;
  background-color: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
`;

const TabMenu = styled.ul`
  display: flex;
  margin: 0 10%;
  border: none;
  background-color: white;
  color: #abb0b5;
  font-size: 1rem;
  cursor: pointer;
  .menu {
    color: #abb0b5;
    width: 100px;
  }
  .clicked-menu {
    color: black;
    width: 100px;
  }
`;

export default TabPanel;
