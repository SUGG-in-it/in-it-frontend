import styled from 'styled-components';
import BannerImg1 from '@/assets/images/001.png';
import BannerImg2 from '@/assets/images/002.png';
import BannerImg3 from '@/assets/images/003.png';
import BannerImg4 from '@/assets/images/004.png';

const BannerSection = () => {
  return (
    <BannerContainer>
      <img src={BannerImg1} />
      <img src={BannerImg2} />
      <img src={BannerImg3} />
      <img src={BannerImg4} />
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgrondDarkColor};
  cursor: pointer;
  img {
    width: 250px;
    height: 250px;
    border-radius: 10px;
    margin: 2em 1em;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  }
`;

export default BannerSection;
