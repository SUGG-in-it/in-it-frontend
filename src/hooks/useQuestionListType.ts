import { questionListTypeState } from '@/store/atoms/questionListType';
import { useRecoilState } from 'recoil';

const useQuestionListType = () => {
  const [questionListType, setQuestionListType] = useRecoilState(questionListTypeState);
  const setGridType = () => {
    setQuestionListType('grid');
  };
  const setListType = () => {
    setQuestionListType('list');
  };

  return { questionListType, setGridType, setListType };
};

export default useQuestionListType;
