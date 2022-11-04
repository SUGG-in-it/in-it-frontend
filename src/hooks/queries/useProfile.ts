import { CustomError } from '@/api/config/error';
import { editProfile, getProfile } from '@/api/profiles';
import { KEYS } from '@/constants/reactQuery';
import { MutationCallbacks } from '@/types/MuationCallbacks';
import { ProfileResponseBody } from '@/types/response/profiles';
import { errorToast, successToast } from '@/utils/toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useProfileQuery = (nickname: string) => {
  const data = useQuery<ProfileResponseBody>([KEYS.PROFILE, { nickname: nickname }], () => getProfile(nickname));
  return data;
};

export const useProfileMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  const queryClient = useQueryClient();
  return useMutation(editProfile, {
    onSuccess: () => {
      onSuccess && onSuccess();
      queryClient.invalidateQueries([KEYS.PROFILE]);
      successToast('프로필 수정이 완료되었습니다. 🥰');
    },
    onError: (error: CustomError) => {
      onError && onError();
      errorToast('프로필 수정이 실패했습니다. 😭');
    },
  });
};
