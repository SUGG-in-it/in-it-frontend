import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

const TagListSkeleton = () => (
  <TagListWrapper>
    <Skeleton count={5} />
  </TagListWrapper>
);

const TagListWrapper = styled.div`
  width: 250px;
  height: fit-content;
  padding: 1em 0.5em 1em 0.8em;
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border-radius: 4px;
  margin-top: 1em;
  span {
    margin-top: 5px;
  }
`;

export default TagListSkeleton;
