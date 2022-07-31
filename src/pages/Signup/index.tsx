import { PrimaryColor, PointColor } from '@/assets/colors';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignUp = () => {
  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate('/sign-in');
  };

  return (
    <Wrapper>
      <SignUpForm>
        <LeftSection>
          <h1>In it</h1>
          <p>코드리뷰 사이트: in it()</p>
        </LeftSection>
        <RightSection>
          <Input label="이메일" type="email" placeholder="이메일을 입력해주세요." />
          <Input label="닉네임" type="text" placeholder="닉네임을 입력해주세요." />
          <Input label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." />
          <Input label="비밀번호 확인" type="password" placeholder="비밀번호 확인을 입력해주세요." />
          <Button color={PointColor}>{'회원가입'}</Button>
          <LoginContainer>
            <span>이미 계정이 있습니까?</span>
            <u onClick={moveToLogin}>로그인하기</u>
          </LoginContainer>
        </RightSection>
      </SignUpForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: linear-gradient(-70deg, ${PrimaryColor} 55%, #fff 45%);
`;

const SignUpForm = styled.div`
  width: 60em;
  height: 40em;
  margin: 0 auto;
  padding: 2em 5em;
  display: flex;
  border-radius: 0.3em;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const LeftSection = styled.div`
  width: 35em;
  h1 {
    font-size: 4rem;
    font-weight: 800;
    margin: 2em 0em 0em 0em;
    color: ${PrimaryColor};
  }
  p {
    font-size: 0.9rem;
    font-weight: 800;
    color: ${PrimaryColor};
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    color: #f5f5f5;
    font-size: 0.8rem;
  }
`;

const LoginContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  span {
    color: white;
    font-size: 0.9rem;
  }
  u {
    color: white;
    font-size: 0.9rem;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default SignUp;
