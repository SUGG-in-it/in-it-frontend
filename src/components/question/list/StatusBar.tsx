import styled from 'styled-components';

const StatusBar = () => {
  const menuList = ['전체', '답변 완료', '답변 진행중'];

  return (
    <StatusBarContainer>
      {menuList.map((menu, index) => {
        return <Status key={index}>{menu}</Status>;
      })}
    </StatusBarContainer>
  );
};

const StatusBarContainer = styled.ul`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.greyLineColor}; ;
`;

const Status = styled.li`
  height: 40px;
  font-weight: 500;
  color: #abb0b5;
  margin: 0em 1.5em;
  font-size: 1.1rem;
`;
export default StatusBar;
