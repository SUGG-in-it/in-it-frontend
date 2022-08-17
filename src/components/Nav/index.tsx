import styled from 'styled-components';
import GrayLine from '@/components/GrayLine';
import Button from '@/components/Button';
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
        <AnswerButton onClick={handleQuestionClick}>{'질문하기'}</AnswerButton>
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
`;

const Tab = styled.button`
  margin: 0 1em;
  border: none;
  background-color: white;
  font-size: 1rem;
  cursor: pointer;
`;

const AnswerButton = styled(Button)`
  width: 120px;
  height: 100%;
  border-radius: 0;
`;

export default Nav;
