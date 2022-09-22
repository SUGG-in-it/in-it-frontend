import { getProfile } from '@/api/profiles';
import { KEYS } from '@/constants/reactQuery';
import { ProfileResponseBody } from '@/types/response/profiles';
import { useQuery } from '@tanstack/react-query';

export const useProfileQuery = (nickname: string) => {
  const data = useQuery<ProfileResponseBody>([KEYS.PROFILE, { nickname: nickname }], () => getProfile(nickname), {
    suspense: true,
  });
  return data;
};
