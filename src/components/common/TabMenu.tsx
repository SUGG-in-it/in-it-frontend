import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { userState } from '@/store/users';

const TAB_MENU = [{ name: '프로필' }, { name: '나의 질문' }, { name: '나의 답변' }];

const TabMenu = () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(0);
  const user = useRecoilValue(userState);

  useEffect(() => {
    matchUrlTab();
  }, []);

  const matchUrlTab = () => {
    if (router.route.includes('/mypage/profile')) {
      setCurrentTab(0);
    }
    if (router.route === '/mypage/question') {
      setCurrentTab(1);
    }
    if (router.route === '/mypage/answer') {
      setCurrentTab(2);
    }
  };

  const selectMenuHandler = (index: number, nickname: string) => {
    switch (index) {
      case 0:
        router.push({ pathname: '/mypage/profile', query: { nickname: nickname } });
        break;
      case 1:
        router.push({ pathname: '/mypage/question', query: { nickname: nickname } });
        break;
      case 2:
        router.push({ pathname: '/mypage/answer', query: { nickname: nickname } });
        break;
    }
  };

  return (
    <TabContainer>
      <TabMenuItem>
        {TAB_MENU.map((menu, index) => (
          <li
            key={index}
            className={currentTab === index ? 'clicked-menu' : 'menu'}
            onClick={() => selectMenuHandler(index, user.nickname)}
          >
            {menu.name}
          </li>
        ))}
      </TabMenuItem>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  display: flex;
  margin-top: 5em;
  padding-top: 4em;
  padding-bottom: 2em;
  height: 50px;
  width: 80vw;
  max-width: 1100px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.greyLineColor};
  background-color: ${({ theme }) => theme.backgrondLightColor};
  ${media.mobile} {
    width: 90vw;
    padding-top: 1em;
    padding-bottom: 1em;
  }
`;

const TabMenuItem = styled.ul`
  display: flex;
  width: 90%;
  margin: 0 auto;
  border: none;
  background-color: ${({ theme }) => theme.backgrondLightColor};
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
    margin: 0;
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

export default TabMenu;
