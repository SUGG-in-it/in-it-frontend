import { media } from '@/styles/mediaQuery';
import styled from 'styled-components';

const BannerSection = () => {
  return (
    <BannerContainer>
      <h1>질문을 작성해보세요.</h1>
      <h3>질문을 작성해 코드리뷰를 받아보아요! 😎</h3>
    </BannerContainer>
  );
};

const BannerContainer = styled.ul`
  background-color: ${({ theme }) => theme.pointColor};
  color: white;
  width: 58vw;
  padding: 2em 21vw;
  h1 {
    font-size: 1.4rem;
    font-weight: bold;
  }
  h3 {
    font-size: 0.9rem;
    margin-top: 1em;
  }
  ${media.tablet} {
    width: calc(100vw - 20%);
    padding: 2em 10%;
  }
`;

export default BannerSection;
