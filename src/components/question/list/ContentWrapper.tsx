import { Viewer } from '@toast-ui/react-editor';
import styled from 'styled-components';

const ContentWrapper = ({ content }: { content: string }) => {
  return (
    <ViewerWrapper>
      <Viewer initialValue={content.length > 300 ? content.slice(0, 300) + ' …' : content}></Viewer>
    </ViewerWrapper>
  );
};

const ViewerWrapper = styled.div`
  padding: 1em 0;
  color: #616568;
  font-size: 0.9rem;
`;

export default ContentWrapper;
