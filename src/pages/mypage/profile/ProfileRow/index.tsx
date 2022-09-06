import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';

const ProfileRow = ({ label, info }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Info>{info}</Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const Label = styled.p`
  font-size: 1rem;
  width: 30%;
  color: ${({ theme }) => theme.grayColor};
  ${media.mobile} {
    font-size: 0.9rem;
  }
`;

const Info = styled.p`
  font-size: 1rem;
  width: 70%;
  color: ${({ theme }) => theme.textColor};
  ${media.mobile} {
    font-size: 0.9rem;
  }
`;

export default ProfileRow;
