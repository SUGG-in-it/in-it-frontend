import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';
import TopWriters from '@/components/common/TopWriters';
import { Suspense } from 'react';
import RetryErrorBoundary from '@/components/common/ErrorBoundary/RetryErrorBoundary';
import TagListSkeleton from '@/components/common/TagsWithDeleteButton/index.skeleton';
import { usePopularTagsQuery } from '@/hooks/queries/useTags';
import Tags from '@/components/common/Tag';

const TagList = () => {
  const { data: tags } = usePopularTagsQuery();

  return (
    <TagListWrapper>
      <p>인기 태그</p>
      <Tags tagList={tags.tags} />
    </TagListWrapper>
  );
};

const LeftAside = () => (
  <AsideContainer>
    <RetryErrorBoundary>
      <Suspense fallback={<TagListSkeleton />}>
        <TagList />
      </Suspense>
    </RetryErrorBoundary>
    <TopWriters />
  </AsideContainer>
);

const AsideContainer = styled.aside`
  width: 180px;
  display: flex;
  flex-direction: column;
  margin-right: 2vw;
  ${media.tablet} {
    display: none;
  }
  ${media.mobile} {
    display: none;
  }
`;

const TagListWrapper = styled.section`
  height: fit-content;
  padding: 1em 0.5em 1em 0.8em;
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border-radius: 4px;
  margin-bottom: 2em;
  p {
    font-size: 0.9rem;
    margin-bottom: 1em;
    color: #000;
    font-weight: 700;
  }
  ${media.tablet} {
    display: none;
  }
`;

export default LeftAside;
