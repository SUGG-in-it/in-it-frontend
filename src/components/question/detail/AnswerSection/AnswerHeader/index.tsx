import { QLabel } from '@/styles/commonStyles';
import styled from 'styled-components';

const AnswerHeader = () => {
  return (
    <AnswerWriteHeader>
      <QLabel>{'A.'}</QLabel>
      <Label>{'총 0개의 답변이 달렸습니다.'}</Label>
    </AnswerWriteHeader>
  );
};

const AnswerWriteHeader = styled.div`
  display: flex;
  align-items: center;
  max-width: 700px;
  width: 85vw;
  margin: 3em auto 0;
`;

const Label = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.grayColor};
`;

export default AnswerHeader;
