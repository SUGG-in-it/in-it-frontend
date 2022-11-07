import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

const StatusBar = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const menuList = ['전체', '답변 완료', '답변 진행중'];
  const router = useRouter();

  const tag = router.query.tag as string;
  const query = router.query.query as string;

  const hadleStatus = (index: number) => {
    setCurrentTab(index);
    let type = 'total';
    switch (index) {
      case 0:
        break;
      case 1:
        type = 'completed';
        break;
      case 2:
        type = 'doing';
        break;
    }
    if (tag && query) {
      return router.push({ pathname: '/question/list', query: { status: type, tag, query } });
    }
    if (tag) {
      return router.push({ pathname: '/question/list', query: { status: type, tag } });
    }
    if (query) {
      return router.push({ pathname: '/question/list', query: { status: type, query } });
    }
    router.push({ pathname: '/question/list', query: { status: type } });
  };

  return (
    <StatusBarContainer>
      {menuList.map((menu, index) => (
        <Status
          key={index}
          className={currentTab === index ? 'clicked-menu' : 'menu'}
          onClick={() => hadleStatus(index)}
        >
          {menu}
        </Status>
      ))}
    </StatusBarContainer>
  );
};

const StatusBarContainer = styled.ul`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.greyLineColor};
  .menu {
    color: #abb0b5;
    font-weight: 600;
  }
  .clicked-menu {
    color: ${({ theme }) => theme.textColor};
    font-weight: 600;
  }
`;

const Status = styled.li`
  height: 40px;
  font-weight: 500;
  color: #abb0b5;
  margin: 0em 1.5em;
  font-size: 1.1rem;
  cursor: pointer;
`;
export default StatusBar;
