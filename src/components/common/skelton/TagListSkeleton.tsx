import { media } from '@/styles/mediaQuery';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

const Tags = ({ children }) => {
  return <TagListWrapper>{children}</TagListWrapper>;
};

const TagListSkeleton = () => <Skeleton wrapper={Tags} height={200} />;

const TagListWrapper = styled.div`
  width: 270px;
  height: fit-content;
  margin-left: 3vw;
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

export default TagListSkeleton;
