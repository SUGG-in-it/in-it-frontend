import { darkModeState } from '@/store/atoms/theme';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { IoMdSunny } from 'react-icons/io';

const ButtonWrapper = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20vh 0;
  border: none;
  background: none;
  background-color: ${({ theme }) => theme.darkModeButtonColor};
  width: 50px;
  height: 50px;
  border-radius: 25px 0px 0px 25px;
  cursor: pointer;
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const DarkButton = styled(BsFillMoonStarsFill)`
  color: white;
  width: 25px;
  height: 25px;
`;

const LightButton = styled(IoMdSunny)`
  color: #ffee58;
  width: 25px;
  height: 25px;
`;

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  return isDarkMode ? (
    <ButtonWrapper onClick={() => setIsDarkMode(false)}>
      <LightButton />
    </ButtonWrapper>
  ) : (
    <ButtonWrapper onClick={() => setIsDarkMode(true)}>
      <DarkButton />
    </ButtonWrapper>
  );
};

export default DarkModeButton;
