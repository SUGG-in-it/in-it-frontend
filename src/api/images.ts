import { POST } from '@/api/config/base';

export const uploadImage = async (file: File) => {
  const uplaodFileForm = new FormData();
  uplaodFileForm.append('image', file);
  return await POST(`/image/upload/${1}`, uplaodFileForm);
};
