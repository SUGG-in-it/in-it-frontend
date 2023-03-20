import { KEYS } from '@/constants/atomKey';
import urlSyncEffect from '@/store/effects/urlSyncEffect';
import { atom } from 'recoil';
export type QuestionListSearchType = 'doing' | 'completed' | 'total';
const QUERY_PARAM_TYPE = 'type';
const QUERY_PARAM_QUERY = 'query';
const QUERY_PARAM_TAG = 'tag';

export const questionListSearchTypeState = atom<QuestionListSearchType>({
  key: QUERY_PARAM_TYPE,
  default: 'total',
  effects: [urlSyncEffect(QUERY_PARAM_TYPE)],
});

export const questionListSearchQueryState = atom({
  key: QUERY_PARAM_QUERY,
  default: '',
  effects: [urlSyncEffect(QUERY_PARAM_QUERY)],
});

export const questionListSearchTagState = atom({
  key: QUERY_PARAM_TAG,
  default: '',
  effects: [urlSyncEffect(QUERY_PARAM_TAG)],
});
