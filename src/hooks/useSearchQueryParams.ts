import { questionListSearchQueryState } from '@/store/atoms/questionListSearch';
import Router from 'next/router';
import { useSetRecoilState } from 'recoil';

const useSearchQueryParams = () => {
  const setQuery = useSetRecoilState(questionListSearchQueryState);
  const setType = useSetRecoilState(questionListSearchQueryState);
  const setTag = useSetRecoilState(questionListSearchQueryState);
  console.log('useSearchQueryParams');
  /* Object.keys(Router.query).forEach((params) => {
    if (params === 'type') {
      console.log('set type');
      setType(Router.query[params] as string);
    }
    if (params === 'query') {
      console.log('set query');
      setQuery(Router.query[params] as string);
    }
    if (params === 'tag') {
      console.log('set tag');
      setTag(Router.query[params] as string);
    }
  }); */
};

export default useSearchQueryParams;
