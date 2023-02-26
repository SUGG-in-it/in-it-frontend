import styled from 'styled-components';
import { media } from '@/styles/mediaQuery';

const WeeklyQuestion = () => {

    const dummy = [{
        id: 0,
        nickname: 'zzi',
        contents: '저는 프론트엔드 개발을 맡을 예정이고, 프로젝트 경험은 아직 1번 밖에 없어서 실력은 많이 부족하지만 함께 공부하면서 멋진 포폴 함께 만드실 분을 찾고자해요. 백엔드 기술 스택은 잘 모르더라도 양해부탁드릴게요..! 😥😥 이 프로젝트로 좋은 개발자 인연이 된다면, 추후에 스터디나 새 프로젝트를 함께 진행해도 좋을 것 같아요.'
    },
    {
        id: 1,
        nickname: 'OMG',
        contents: '소통 잘 해주실 수 있는 분을 환영해요. 작은 리액션이라도 괜찮아요. 개발자에게는 개발 스킬뿐만 아니라 소프트 스킬도 중요하기 때문에 각자 맡은 것만 개발하고 마는 것은 의미 없다고 생각해요. 팀원간 소통을 통해 함께 즐기실 분만 와주세요!'
    },
    {
        id: 2,
        nickname: 'hahaha',
        contents: '디자이너분을 구인한다면 너무 좋겠지만, 없을 경우 백 2 + 프론트 2로 진행할 예정이에요.'
    },{
        id: 3,
        nickname: 'joy',
        contents: '기획 규모에 따라 이 기간은 더 늘어날 수도 있으니 포폴이 급한 분께는 적합하지 않을 수 있어요.'
    },
    {
        id: 4,
        nickname: 'dream',
        contents: '대신 CSS의 list-style-type 속성을 사용하여 마커의 종류를 변경해야 합니다.'
    },
    {
        id: 5,
        nickname: 'helloworld',
        contents: '순서가 없는 리스트에서 리스트 아이템에 사용되는 마커(marker)의 종류를 명시함.'
    }]

  return (
    <WeeklyQuestionWrapper>
        <p>주간 인기글</p>
        <QuestionWrapper>
        {
            dummy.map((question) => (
                <QuestionContainer key={question.id}>
                    <Contents>{question.contents}</Contents>
                    <Nickname>{question.nickname}</Nickname>
                </QuestionContainer>
            ))
        }
        </QuestionWrapper>
     </WeeklyQuestionWrapper>
  );
};

const WeeklyQuestionWrapper = styled.section`
  height: fit-content;
  padding: 1em 0.5em 1em 0.8em;
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border-radius: 4px;
  margin-top: 2em;
  & > p {
    font-size: 0.9rem;
    margin-bottom: 1em;
    color:#000;
    font-weight: 700;
  }
  ${media.tablet} {
    display: none;
  }
`;

const QuestionWrapper = styled.ul`
  
`;

const QuestionContainer = styled.li`
    display: flex;   
    flex-direction: column;
    justify-content: space-between;    
    padding: 0.5em;
`;

const Contents = styled.p`    
    margin-bottom: 6px;
    width: 100%;
    font-weight: 500;
    font-size: 12px;
    color: #495057;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 150%;
`

const Nickname = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    color: #212529;
`


export default WeeklyQuestion;
