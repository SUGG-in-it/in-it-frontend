import styled from 'styled-components';
import BannerImg1 from '@/assets/images/001.png';
import BannerImg2 from '@/assets/images/002.png';
import BannerImg3 from '@/assets/images/003.png';
import BannerImg4 from '@/assets/images/004.png';
import { media } from '@/styles/mediaQuery';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMainContentQuery } from '@/hooks/queries/useQuestion';

const BannerSection = () => {
  const router = useRouter();
  const { data: recent } = useMainContentQuery('recent');
  const { data: point } = useMainContentQuery('point');
  const { data: random } = useMainContentQuery('random');
  const { data: popular } = useMainContentQuery('popular');

  const handleBannerClick = (id: number) => {
    if (!id) return;
    router.push(`question/detail/${id}`);
  };

  return (
    <BannerContainer>
      <Image
        className={'banner-img1'}
        src={BannerImg1}
        width={200}
        height={200}
        placeholder="blur"
        onClick={() => handleBannerClick(recent.questionId)}
      />
      <Image
        className={'banner-img2'}
        src={BannerImg2}
        width={200}
        height={200}
        placeholder="blur"
        onClick={() => handleBannerClick(point.questionId)}
      />
      <Image
        className={'banner-img3'}
        src={BannerImg3}
        width={200}
        height={200}
        placeholder="blur"
        onClick={() => handleBannerClick(random.questionId)}
      />
      <Image
        className={'banner-img4'}
        src={BannerImg4}
        width={200}
        height={200}
        placeholder="blur"
        onClick={() => handleBannerClick(popular.questionId)}
      />
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  cursor: pointer;
  padding-top: 3em;
  justify-content: space-between;
  padding-bottom: 3em;
  width: 80vw;
  max-width: 850px;

  .banner-img1 {
    width: 20vw;
    height: 20vw;
    max-width: 200px;
    max-height: 200px;
    border-radius: 10px;
    margin: 2em 1em;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  }
  .banner-img2 {
    width: 20vw;
    height: 20vw;
    max-width: 200px;
    max-height: 200px;
    border-radius: 10px;
    margin: 2em 1em;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  }
  .banner-img3 {
    width: 20vw;
    height: 20vw;
    max-width: 200px;
    max-height: 200px;
    border-radius: 10px;
    margin: 2em 1em;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  }
  .banner-img4 {
    width: 20vw;
    height: 20vw;
    max-width: 200px;
    max-height: 200px;
    border-radius: 10px;
    margin: 2em 1em;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  }
  ${media.tablet} {
    img {
      width: 27vw;
      height: 27vw;
    }
    .banner-img4 {
      display: none;
    }
  }
  ${media.mobile} {
    img {
      width: 40vw;
      height: 40vw;
    }
    .banner-img3 {
      display: none;
    }
  }
`;

export default BannerSection;
