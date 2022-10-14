import Input from '@/components/common/Input/Input';
import { UseInputReturn } from '@/hooks/useInput';
import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  margin-bottom: 1em;
  position: relative;
  padding: 0.2em 0.5em;
  height: 35px;
  background-color: white;
`;

const SearchInput = styled(Input)`
  background-color: transparent;
  border: 0;
  width: 100%;
  outline: none;
  height: 35px;
  font-size: 0.9rem;
  font-weight: bold;
`;

const SearchBar = ({ searchWord }: { searchWord: UseInputReturn }) => (
  <SearchContainer>
    {' '}
    <SearchInput
      type="text"
      value={searchWord.value}
      onChange={searchWord.onChange}
      placeholder={'질문을 검색해보세요!'}
    />
  </SearchContainer>
);

export default SearchBar;
