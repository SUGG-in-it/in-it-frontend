import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';

interface ContentViewerProps {
  content: string;
  length?: number;
}

const ContentWrapper = ({ content, length }: ContentViewerProps) => {
  return (
    <ViewerWrapper>
      {length ? (
        <Viewer initialValue={content.length > length ? content.slice(0, length) + ' …' : content} />
      ) : (
        <Viewer initialValue={content} />
      )}
    </ViewerWrapper>
  );
};

const ViewerWrapper = styled.div`
  h1,p {
    margin-bottom: 6px;
    width: 100%;
    font-weight: 500;
    font-size: 0.75rem;
    color: #616568;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 150%;
  }
`;

export default ContentWrapper;
