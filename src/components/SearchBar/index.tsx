import { PrimaryColor } from '@/assets/colors';
import { BiSearchAlt2 } from 'react-icons/bi';
import styled from 'styled-components';

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  return (
    <SearchBarContainer>
      <SearchText type="text" placeholder={placeholder} />
      <BiSearchAlt2 />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  border: 1px solid #004b91;
  border-radius: 3px;
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    color: ${PrimaryColor};
    margin-right: 5px;
  }
`;

const SearchText = styled.input`
  margin: 0.5em;
  font-size: 1rem;
  position: relative;
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default SearchBar;
