import styled from 'styled-components';
import GrayLine from '@/components/GrayLine';
import { useNavigate } from 'react-router-dom';

const TabPanel = () => {
  const navigate = useNavigate();

  const handleProfilelick = () => {
    navigate('/my-page/profile');
  };

  const handleAnswerClick = () => {
    navigate('/my-page/answer');
  };

  const handleQuestionClick = () => {
    navigate('/my-page/question');
  };

  const handleCommentClick = () => {
    navigate('/my-page/comment');
  };

  return (
    <>
      <GrayLine />
      <TabContainer>
        <Tab onClick={handleProfilelick}>프로필</Tab>
        <Tab onClick={handleQuestionClick}>나의 질문</Tab>
        <Tab onClick={handleAnswerClick}>나의 답변</Tab>
        <Tab onClick={handleCommentClick}>나의 댓글</Tab>
      </TabContainer>
    </>
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

const Tab = styled.button`
  margin: 0 1em;
  border: none;
  background-color: white;
  color: #abb0b5;
  font-size: 1rem;
  cursor: pointer;
`;

export default TabPanel;
