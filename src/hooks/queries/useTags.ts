import { getTags } from '@/api/tags';
import { KEYS } from '@/constants/reactQuery';
import { TagsResponseBody } from '@/types/response/tags';
import { useQuery } from '@tanstack/react-query';

export const useTagsQuery = (type: string) => {
  const data = useQuery<TagsResponseBody>([KEYS.TAGS, { type: type }], () => getTags(type));
  return data;
};
