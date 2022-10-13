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
  padding: 0.5em 0;
  color: #616568;
  font-size: 0.9rem;
  line-height: 1.25;
`;

export default ContentWrapper;
