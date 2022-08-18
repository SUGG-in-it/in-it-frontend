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
  color: #595959;
`;

const Info = styled.p`
  font-size: 1rem;
  width: 70%;
`;

export default ProfileRow;
