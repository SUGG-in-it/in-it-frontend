import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';

const TAB_MENU = [{ name: '프로필' }, { name: '나의 질문' }, { name: '나의 답변' }, { name: '나의 댓글' }];

const TabPanel = () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    matchUrlTab();
  }, []);

  const matchUrlTab = () => {
    if (router.route === '/mypage/profile') {
      setCurrentTab(0);
    }
    if (router.route === '/mypage/question') {
      setCurrentTab(1);
    }
    if (router.route === '/mypage/answer') {
      setCurrentTab(2);
    }
    if (router.route === '/mypage/comment') {
      setCurrentTab(3);
    }
  };

  const selectMenuHandler = (index) => {
    switch (index) {
      case 0:
        router.push('/mypage/profile');
        break;
      case 1:
        router.push('/mypage/question');
        break;
      case 2:
        router.push('/mypage/answer');
        break;
      case 3:
        router.push('/mypage/comment');
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
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  border-radius: 8px;
  ${media.mobile} {
    width: 90vw;
  }
`;

const TabMenu = styled.ul`
  display: flex;
  margin: 0 10%;
  border: none;
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  color: ${({ theme }) => theme.grayColor};
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  .menu {
    color: ${({ theme }) => theme.grayColor};
    width: 100px;
  }
  .clicked-menu {
    color: ${({ theme }) => theme.textColor};
    width: 100px;
  }
  ${media.mobile} {
    margin: 0 8%;
    font-size: 0.9rem;
    .menu {
      width: 70px;
      text-align: center;
    }
    .clicked-menu {
      width: 70px;
      text-align: center;
    }
  }
`;

export default TabPanel;
