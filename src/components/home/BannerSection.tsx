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
      <ImageWrapper>
        <Image
          src={BannerImg1}
          width={180}
          height={180}
          placeholder="blur"
          alt="인기 질문"
          onClick={() => handleBannerClick(recent.questionId)}
        />
      </ImageWrapper>
      <Image
        src={BannerImg2}
        width={180}
        height={180}
        placeholder="blur"
        alt="포인트가 가장 많은 질문"
        onClick={() => handleBannerClick(point.questionId)}
      />
      <Image
        src={BannerImg3}
        width={180}
        height={180}
        placeholder="blur"
        alt="추천 질문"
        onClick={() => handleBannerClick(random.questionId)}
      />
      <Image
        src={BannerImg4}
        width={180}
        height={180}
        placeholder="blur"
        alt="인기 질문"
        onClick={() => handleBannerClick(popular.questionId)}
      />
    </BannerContainer>
  );
};

const BannerContainer = styled.section`
  display: flex;
  justify-content: center;
  background-color: white;
  cursor: pointer;
  justify-content: space-between;
  padding-bottom: 3em;
  width: 70vw;
  max-width: 750px;
  ${media.tablet} {
    width: 90vw;
    margin: 0 auto;
  }
  img {
    border-radius: 10px;
    margin: 2em 1em;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  }
`;

const ImageWrapper = styled.div`
  ${media.mobile} {
    display: none;
  }
`;

export default BannerSection;
