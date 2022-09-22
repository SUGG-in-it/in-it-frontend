import GrayLine from '@/components/common/GreyLine';
import QuestionLayout from '@/components/layouts/QuestionLayout';
import AnswerSection from '@/components/question/detail/answer/AnswerSection';
import QuestionSection from '@/components/question/detail/qusetion/QuestionSection';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';

const QuestionDetailPage = ({ id }: { id: number }) => {
  return (
    <QuestionLayout>
      <QuestionWrapper>
        <QuestionSection id={id} />
        <GrayLine />
        <AnswerSection id={id} />
      </QuestionWrapper>
    </QuestionLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;

  return {
    props: {
      id,
    },
  };
};

const QuestionWrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  padding-bottom: 3em;
`;

export default QuestionDetailPage;
