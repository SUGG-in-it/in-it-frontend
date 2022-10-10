import Input from '@/components/common/Input/Input';
import { UseInputReturn } from '@/hooks/useInput';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 400px;
  height: 45px;
  position: relative;
  border: 0;
  img {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

const SearchInput = styled(Input)`
  border: 0;
  padding-left: 10px;
  background-color: #eaeaea;
  width: 100%;
  height: 100%;
  outline: none;
`;

const SearchBar = ({ searchWord }: { searchWord: UseInputReturn }) => {
  <SearchContainer>
    <SearchInput
      type="text"
      value={searchWord.value}
      onChange={searchWord.onChange}
      placeholder={'태그를 입력해주세요!'}
    />
    <img src="assets/imgs/search.svg" alt="searchIcon" />
  </SearchContainer>;
};

export default SearchBar;
