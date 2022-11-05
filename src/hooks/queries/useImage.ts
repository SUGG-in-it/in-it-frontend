import { CustomError } from '@/api/config/error';
import { uploadImage } from '@/api/images';
import { MutationCallbacks } from '@/types/MuationCallbacks';
import { errorToast, successToast } from '@/utils/toast';
import { useMutation } from '@tanstack/react-query';

export const useUploadImageMutation = ({ onSuccess, onError }: MutationCallbacks = {}) => {
  return useMutation(uploadImage, {
    onSuccess: () => {
      onSuccess && onSuccess();
      successToast('이미지 업로드가 완료되었습니다. 🥰');
    },
    onError: (error: CustomError) => {
      onError && onError();
      errorToast('이미지 업로드에 실패했습니다. 😭');
    },
  });
};
