import { QLabel } from '@/styles/commonStyles';
import styled from 'styled-components';

const AnswerHeader = ({ answerCount }: { answerCount: number }) => {
  return (
    <AnswerWriteHeader>
      <QLabel>{'A.'}</QLabel>
      {answerCount ? (
        <Label>{`총 ${answerCount}개의 답변이 달렸습니다.`}</Label>
      ) : (
        <Label>{`답변이 한개도 없어요! 첫 답변을 등록해주세요 🙌`}</Label>
      )}
    </AnswerWriteHeader>
  );
};

const AnswerWriteHeader = styled.div`
  display: flex;
  align-items: center;
  max-width: 700px;
  width: 85vw;
  margin: 3em auto 1em;
`;

const Label = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.grayColor};
`;

export default AnswerHeader;
