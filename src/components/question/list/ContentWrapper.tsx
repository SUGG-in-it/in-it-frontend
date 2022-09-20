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
  padding: 10px;
`;

export default ContentWrapper;
