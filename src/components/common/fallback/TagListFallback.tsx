import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';

const TagsFallback = ({ error, resetErrorBoundary }) => (
  <AsideContainer>
    <TagListWrapper>
      <p>인기 태그를 불러오는데 실패했어요 😭😭😭 </p>
    </TagListWrapper>
  </AsideContainer>
);

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagListWrapper = styled.ul`
  width: 250px;
  height: fit-content;
  margin-left: 3vw;
  padding: 1em 0.5em 1em 0.8em;
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border-radius: 4px;
  margin-top: 1em;
  p {
    font-size: 0.9rem;
    margin-bottom: 1em;
    color: ${({ theme }) => theme.textColor};
  }
  ${media.tablet} {
    display: none;
  }
`;

export default TagsFallback;
