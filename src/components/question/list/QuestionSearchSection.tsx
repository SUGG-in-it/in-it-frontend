import AutoComplete from '@/components/common/AutoComplete';
import Button from '@/components/common/button/Button';
import SearchBar from '@/components/common/SearchBar';
import useInput from '@/hooks/useInput';
import styled from 'styled-components';

const QuestionSearchSection = () => {
  const searchWord = useInput('');
  const handleTagList = () => {
    //
  };

  const handleSearch = () => {
    //
  };

  return (
    <SerachContainer>
      <SearchInput>
        <SearchBar searchWord={searchWord} />
        <AutoComplete searchWord={searchWord} handleTagList={handleTagList} />
      </SearchInput>
      <SearchButtonWrapper>
        <SearchButton onClick={handleSearch}>{'검색'}</SearchButton>
      </SearchButtonWrapper>
    </SerachContainer>
  );
};

const SerachContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
`;

const SearchInput = styled.div`
  width: calc(100% - 150px);
`;

const SearchButtonWrapper = styled.div`
  width: 100px;
`;

const SearchButton = styled(Button)`
  width: 80px;
  height: 45px;
  margin: 0;
  border-radius: 3px;
`;

export default QuestionSearchSection;
