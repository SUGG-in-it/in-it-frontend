import { getTags } from '@/api/tags';
import { KEYS } from '@/constants/reactQuery';
import { TagsResponseBody } from '@/types/response/tags';
import { useQuery } from '@tanstack/react-query';

export const useAllTagsQuery = () => {
  const data = useQuery<TagsResponseBody>([KEYS.TAGS, { type: 'All' }], () => getTags('All'));
  return data;
};

export const usePopularTagsQuery = () => {
  const data = useQuery<TagsResponseBody>([KEYS.TAGS, { type: 'popular' }], () => getTags('popular'));
  return data;
};
