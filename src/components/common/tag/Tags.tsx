import styled from 'styled-components';

const Tags = ({ tagList }: { tagList: string[] }) => {
  return (
    <div>
      {tagList.map((tag) => (
        <TagWrapper key={tag}>
          <span>{`# ${tag}`}</span>
        </TagWrapper>
      ))}
    </div>
  );
};

const TagWrapper = styled.li`
  background-color: rgba(77, 124, 254, 0.15);
  color: #3e4042;
  padding: 0.3em;
  border-radius: 3px;
  width: fit-content;
  margin: 0em 1em 1em 0em;
  display: inline-block;
`;

export default Tags;
