import { LoaderWrapper } from '@/components/common/loading/LoadingWrapper.style';
import MoonLoader from 'react-spinners/MoonLoader';

function MoonLoading() {
  return (
    <LoaderWrapper>
      <MoonLoader size={20} />
    </LoaderWrapper>
  );
}

export default MoonLoading;
