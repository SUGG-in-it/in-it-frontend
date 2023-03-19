import { media } from '@/styles/mediaQuery';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Tags = ({ tagList }: { tagList: string[] }) => {
  const router = useRouter();
  const onTagClick = (tag: string) => {
    router.push({ pathname: '/question/list', query: { type: 'total', tag, page: 1 } });
  };

  return (
    <ul>
      {tagList?.map((tag) => (
        <TagWrapper key={tag} onClick={() => onTagClick(tag)}>
          <span>{`# ${tag}`}</span>
        </TagWrapper>
      ))}
    </ul>
  );
};

const TagWrapper = styled.li`
  background-color: rgba(77, 124, 254, 0.15);
  color: #3e4042;
  padding: 0.3em;
  border-radius: 3px;
  width: fit-content;
  margin: 0.7em 1.2em 0em 0em;
  display: inline-block;
  font-weight: 500;
  font-size: 0.9rem;
  ${media.mobile} {
    font-size: 0.9rem;
  }
  :hover {
    cursor: pointer;
  }
`;

export default Tags;
