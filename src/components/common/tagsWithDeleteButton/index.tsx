import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';

const TagsWithDeleteButton = ({
  tagList,
  setTagList,
}: {
  tagList: string[];
  setTagList: Dispatch<SetStateAction<string[]>>;
}) => {
  const handleDeleteClick = (deleteTag: string) => {
    setTagList((tagList) => tagList.filter((tag) => tag !== deleteTag));
  };

  return (
    <TagsContainer>
      {tagList?.map((tag) => (
        <TagWrapper key={tag}>
          <span>{`# ${tag}`}</span>
          <span onClick={() => handleDeleteClick(tag)}>x</span>
        </TagWrapper>
      ))}
    </TagsContainer>
  );
};

const TagsContainer = styled.ul`
  display: flex;
`;

const TagWrapper = styled.li`
  background-color: rgba(77, 124, 254, 0.15);
  color: #3e4042;
  padding: 0.5em;
  border-radius: 5px;
  width: fit-content;
  margin: 0em 1em 1em 0em;
  display: flex;
  align-items: center;
  font-weight: bold;
  span {
    padding: 0.3em;
    font-size: 1.1rem;
  }
  :hover {
    cursor: pointer;
  }
`;

export default TagsWithDeleteButton;
