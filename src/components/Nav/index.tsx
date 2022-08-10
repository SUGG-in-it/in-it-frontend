import styled from 'styled-components';
import GrayLine from '@/components/GrayLine';
import Button from '@/components/Button';
import { PointColor } from '@/assets/colors';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAnswerClick = () => {
    navigate('/question/list');
  };

  const handleQuestionClick = () => {
    navigate('/question/write');
  };

  return (
    <>
      <GrayLine />
      <NavContainer>
        <div>
          <Tab onClick={handleHomeClick}>홈</Tab>
          <Tab onClick={handleAnswerClick}>답변하기</Tab>
        </div>
        <Button className={'answer-button'} onClick={handleQuestionClick} color={PointColor}>
          {'질문하기'}
        </Button>
      </NavContainer>
      <GrayLine />
    </>
  );
};

const NavContainer = styled.div`
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  .answer-button {
    width: 120px;
    height: 100%;
    border-radius: 0;
  }
`;

const Tab = styled.button`
  margin: 0 1em;
  border: none;
  background-color: white;
  font-size: 1rem;
  cursor: pointer;
`;

export default Nav;
