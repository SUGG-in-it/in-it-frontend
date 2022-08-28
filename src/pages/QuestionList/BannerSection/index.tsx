import styled from 'styled-components';

const BannerSection = () => {
  return (
    <BannerContainer>
      <h1>코드 리뷰를 해보세요</h1>
      <h3>코드 리뷰로 받은 포인트로 등급을 올려봐요! 😎</h3>
    </BannerContainer>
  );
};

const BannerContainer = styled.ul`
  background-color: ${({ theme }) => theme.pointColor};
  color: white;
  width: 60%;
  padding: 2em 21%;
  h1 {
    font-size: 1.4rem;
    font-weight: bold;
  }
  h3 {
    font-size: 0.9rem;
    margin-top: 1em;
  }
`;

export default BannerSection;
