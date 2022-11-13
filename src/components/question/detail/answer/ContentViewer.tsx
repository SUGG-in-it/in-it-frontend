import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';

interface ContentViewerProps {
  content: string;
  length?: number;
}

const ContentWrapper = ({ content }: ContentViewerProps) => {
  return (
    <ViewerWrapper>
      <Viewer initialValue={content} />
    </ViewerWrapper>
  );
};

const ViewerWrapper = styled.div`
  color: #616568;
  font-size: 0.9rem;
  line-height: 1.25;
`;

export default ContentWrapper;
