import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';

const dummy = [
  'react',
  'javascript',
  'typescript',
  'node',
  'spring',
  'express',
  'java',
  'python',
  'ai',
  'front-end',
  'back-end',
];

const TagListSection = () => {
  return (
    <TagListWrapper>
      <p>인기 태그</p>
      {dummy.map((tag, index) => {
        return (
          <TagWrapper key={index}>
            <span>{`# ${tag}`}</span>
          </TagWrapper>
        );
      })}
    </TagListWrapper>
  );
};

const TagListWrapper = styled.ul`
  width: 200px;
  height: fit-content;
  margin-top: 3em;
  padding: 1em 0.5em 1em 0.8em;
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border-radius: 4px;
  p {
    font-size: 0.9rem;
    margin-bottom: 1em;
    color: ${({ theme }) => theme.textColor};
  }
  ${media.tablet} {
    display: none;
  }
`;

const TagWrapper = styled.li`
  background-color: #eff3fa;
  color: #3e4042;
  padding: 0.3em;
  border-radius: 3px;
  width: fit-content;
  margin: 0em 1em 1em 0em;
  display: inline-block;
`;

export default TagListSection;
