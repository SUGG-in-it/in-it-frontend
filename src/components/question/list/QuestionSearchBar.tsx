import AutoComplete from '@/components/common/AutoComplete';
import Button from '@/components/common/Button';
import SearchBar from '@/components/common/SearchBar';
import TagsWithDeleteButton from '@/components/common/TagsWithDeleteButton';
import useInput from '@/hooks/useInput';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiRotateCcw } from 'react-icons/fi';
import { useRouter } from 'next/router';

const QuestionSearchBar = () => {
  const searchWord = useInput('');
  const searchTag = useInput('');
  const [tagList, setTagList] = useState<string[]>([]);
  const router = useRouter();
  let type = router.query.status as 'doing' | 'completed' | 'total';
  const query = router.query.query as string;
  const tag = router.query.tag as string;

  useEffect(() => {
    searchWord.setValue(query);
    const tagList = tag?.split(',');
    if (tagList && tagList.length >= 1) {
      setTagList(tagList);
    }
  }, [tag, query]);

  useEffect(() => {
    handleSearch();
  }, [tagList]);

  const handleTagList = (tag: string) => {
    if (!tagList.includes(tag)) {
      setTagList((tagList) => [...tagList, tag]);
    }
  };

  const handleSearch = () => {
    if (!type) type = 'total';
    const query = searchWord.value;
    const tag = tagList.join(',');
    if (tag && query) {
      return router.push({ pathname: '/question/list', query: { status: type, tag, query, page: 1 } });
    }
    if (tag) {
      return router.push({ pathname: '/question/list', query: { status: type, tag, page: 1 } });
    }
    if (query) {
      return router.push({ pathname: '/question/list', query: { status: type, query, page: 1 } });
    }
    return router.push({ pathname: '/question/list', query: { status: type, page: 1 } });
  };

  const handleInit = () => {
    setTagList([]);
    searchWord.setValue('');
  };

  return (
    <SerachContainer>
      <SearchInput>
        <SearchBar searchWord={searchWord} />
        <AutoComplete searchTag={searchTag} handleTagList={handleTagList} />
        <TagsWithDeleteButton tagList={tagList} setTagList={setTagList} />
      </SearchInput>
      <ButtonContainer>
        <SearchButton onClick={handleSearch}>{'검색'}</SearchButton>
        <InitButtonWrapper onClick={handleInit}>
          <InitButton />
          <span>{'초기화'}</span>
        </InitButtonWrapper>
      </ButtonContainer>
    </SerachContainer>
  );
};

const SerachContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
  width: 100%;
`;

const SearchInput = styled.div`
  width: calc(100% - 150px);
`;

const ButtonContainer = styled.div`
  width: 100px;
`;

const InitButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 60px;
  padding: 10px;
  margin-top: 20px;
  span {
    font-size: 0.8rem;
    font-weight: 700;
    margin-left: 7px;
  }
  :hover {
    cursor: pointer;
    background-color: #f5f5f5;
  }
`;

const SearchButton = styled(Button)`
  width: 80px;
  height: 45px;
  margin: 0;
  border-radius: 3px;
`;

const InitButton = styled(FiRotateCcw)`
  width: 15px;
  height: 15px;
`;

export default QuestionSearchBar;
