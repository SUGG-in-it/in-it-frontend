import styled from 'styled-components';
import GrayLine from '@/components/GrayLine';

const Nav = ({ handleTabClick }: { handleTabClick(tabIndex: number): void }) => {
  return (
    <>
      <GrayLine />
      <NavContainer>
        <Tab onClick={() => handleTabClick(0)}>프로필</Tab>
        <Tab onClick={() => handleTabClick(1)}>나의 질문</Tab>
        <Tab onClick={() => handleTabClick(2)}>나의 답변</Tab>
        <Tab onClick={() => handleTabClick(3)}>나의 댓글</Tab>
      </NavContainer>
      <GrayLine />
    </>
  );
};

const NavContainer = styled.div`
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: white;
`;

const Tab = styled.button`
  margin: 0 1em;
  border: none;
  background-color: white;
  font-size: 1rem;
  cursor: pointer;
`;

export default Nav;
