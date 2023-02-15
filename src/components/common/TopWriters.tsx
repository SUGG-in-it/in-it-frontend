import styled from 'styled-components';
import { media } from '@/styles/mediaQuery';

const TopWriters = () => {

    const dummy = [{
        id: 0,
        nickname: 'zzi',
        count: 109
    },
    {
        id: 1,
        nickname: 'OMG',
        count: 98
    },
    {
        id: 2,
        nickname: 'hahaha',
        count: 52
    },{
        id: 3,
        nickname: 'joy',
        count: 44
    },
    {
        id: 4,
        nickname: 'dream',
        count: 26
    },
    {
        id: 5,
        nickname: 'helloworld',
        count: 25
    }]

  return (
    <TopWritersWrapper>
        <p>init TOP Writers</p>
        <WritersWrapper>
        {
            dummy.map((writer) => (
                <WritersContainer key={writer.id}>
                    <Nickname>{writer.nickname}</Nickname>
                    <Count>{writer.count}</Count>
                </WritersContainer>
            ))
        }
        </WritersWrapper>
     </TopWritersWrapper>
  );
};

const TopWritersWrapper = styled.section`
  height: fit-content;
  padding: 1em 0.5em 1em 0.8em;
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border-radius: 4px;
  margin-top: 1em;
  & > p {
    font-size: 0.9rem;
    margin-bottom: 1em;
    color:#212529;
    font-weight: 700;
  }
  ${media.tablet} {
    display: none;
  }
`;

const WritersWrapper = styled.ul`
  
`;

const WritersContainer = styled.li`
    display: flex;    
    justify-content: space-between;    
    margin-bottom: 0.7em;
`;

const Nickname = styled.p`
    font-weight: 700;
    font-size: 0.9rem;
    color: #495057;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

const Count = styled.p`
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 120%;
  color: #adb5bd;
`


export default TopWriters;
