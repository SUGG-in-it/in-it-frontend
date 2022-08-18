import GrayLine from '@/components/GrayLine';
import { QLable } from '@/styles/commonStyles';
import styled from 'styled-components';

const QuestionSection = () => {
  const question = {
    id: 1,
    isCompleted: true,
    nickName: '지렁이',
    date: '2022-08-17',
    title: '코드 리뷰 해주세요.',
    content:
      '구할 무한한 이는 그와 소담스러운 얼마나 긴지라 우리 사막이다. 석가는 길지 찬미를 아름답고 실현에 동산에는 부패를 공자는 것이다. 지혜는 그것은 따뜻한 가장 그들에게 거선의 예수는 꽃이 부패뿐이다. 능히 청춘은 어디 옷을 피고, 있음으로써 있는가? 대고, 속에 새 뭇 것은 하는 같이, 이것을 그리하였는가? 청춘의 커다란 인생에 피가 든 철환하였는가? 가치를 있을 그들을 갑 내는 뜨고, 모래뿐일 봄바람이다. 못할 이 설산에서 구하지 예수는 힘있다. 석가는 시들어 만천하의 가는 날카로우나 불어 힘있다.',
    tags: ['react', 'js'],
  };

  return (
    <QuestionSectionContainer>
      <SectionRow>
        <QLable>Q.</QLable>
        <Title>{question.title}</Title>
      </SectionRow>
      <SectionRow>
        <NickName>{question.nickName}</NickName>
        <Date>{question.date}</Date>
      </SectionRow>
      <GrayLine />
      <SectionRow>
        <Content>{question.content}</Content>
      </SectionRow>
    </QuestionSectionContainer>
  );
};

const QuestionSectionContainer = styled.div`
  padding: 2em 1.2em;
  background-color: white;
`;

const SectionRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;

const NickName = styled.p`
  font-size: 0.8rem;
  margin-right: 1em;
  margin-left: 0.5em;
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: #adb5bd;
`;

const Content = styled.p`
  line-height: 1.3;
`;

export default QuestionSection;
