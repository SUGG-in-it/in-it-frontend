import styled from 'styled-components';

function GrayLine() {
  return <GrayLineDiv></GrayLineDiv>;
}

export default GrayLine;

const GrayLineDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.greyLineColor};
`;
