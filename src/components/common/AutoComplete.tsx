import styled from 'styled-components';
import { FaHashtag } from 'react-icons/fa';
import Input from '@/components/common/Input/Input';
import { UseInputReturn } from '@/hooks/useInput';
import { useTagsQuery } from '@/hooks/queries/useTags';
import { useEffect, useState } from 'react';

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #eaeaea;
  border: 0;
  margin-bottom: 1em;
  position: relative;
  img {
    width: 20px;
    height: 20px;
    position: absolute;
  }
`;

const SearchInput = styled(Input)`
  border: 0;
  background-color: #eaeaea;
  width: 100%;
  outline: none;
  font-size: 0.9rem;
  font-weight: bold;
`;

const AutoSearchContainer = styled.div`
  z-index: 3;
  height: fit-content;
  width: 20em;
  background-color: #fff;
  position: absolute;
  top: 45px;
  border: 1px solid #e4e7e8;
  box-shadow: 0 2px 3px 0 rgb(0 1 3 / 7%);
  padding: 15px;
`;

const AutoSearchWrap = styled.ul``;

const AutoSearchData = styled.li`
  padding: 0.6em;
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 4;
  letter-spacing: 2px;
  position: relative;
  &:hover {
    background-color: #eceff1;
    cursor: pointer;
  }
`;

const AutoComplete = ({
  searchWord,
  handleTagList,
}: {
  searchWord: UseInputReturn;
  handleTagList: (tag: string) => void;
}) => {
  const { data: tags } = useTagsQuery('all');
  const [autoCompleteWords, setAutoCompleteWords] = useState<string[]>([]);

  useEffect(() => {
    if (tags?.tags?.length) {
      const filteredTags = tags?.tags?.filter((tag: string) => tag.includes(searchWord.value));
      setAutoCompleteWords(filteredTags);
    }
  }, [searchWord.value]);

  const handleAutoSearchDataClick = (word: string) => {
    handleTagList(word);
    searchWord.setValue('');
  };

  return (
    <SearchContainer>
      <FaHashtag />
      <SearchInput
        type="text"
        value={searchWord.value}
        onChange={searchWord.onChange}
        placeholder={'태그를 입력해주세요!'}
      />
      {autoCompleteWords.length && (
        <AutoSearchContainer>
          <AutoSearchWrap>
            {autoCompleteWords.map((word: string) => (
              <AutoSearchData key={word} onClick={() => handleAutoSearchDataClick(word)}>
                {word}
              </AutoSearchData>
            ))}
          </AutoSearchWrap>
        </AutoSearchContainer>
      )}
    </SearchContainer>
  );
};

export default AutoComplete;
