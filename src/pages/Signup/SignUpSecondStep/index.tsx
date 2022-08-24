import { PointColor } from '@/assets/colors';
import Button from '@/components/Button';
import Input from '@/components/Input';
import ValidationInput from '@/components/Input/ValidationInput';
import { useJoinMutation } from '@/hooks/queries/useUser';
import useInput from '@/hooks/useInput';
import useValidationInput from '@/hooks/useValidationInput';
import { signUpState } from '@/store/users';
import { validateRePassword } from '@/utils/validations';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const SignUpSecondStep = () => {
  const navigate = useNavigate();
  const nickname = useValidationInput('', 'nickname');
  const password = useValidationInput('', 'password');
  const rePassword = useInput('');
  const [rePasswordErrorMsg, setRePasswordErrorMsg] = useState('');
  const [year, setYear] = useState('');
  const workPosition = useValidationInput('', 'workPosition');
  const [signUp, setSignUp] = useRecoilState(signUpState);
  const mutationJoin = useJoinMutation({
    onSuccess: () => {
      navigate('/login');
      setSignUp({
        step: 1,
        email: '',
      });
    },
    onError: () => {
      console.log('error');
    },
  });

  const handleYearSelect = (e) => {
    setYear(e.target.value);
  };

  const validationCheck = () => {
    const { isError, msg } = validateRePassword(password.value, rePassword.value);
    setRePasswordErrorMsg(msg);
    if (nickname.isError || password.isError || workPosition.isError || isError) return false;
    return true;
  };

  const handleSignUp = () => {
    if (validationCheck()) {
      mutationJoin.mutate({
        email: signUp.email,
        password: password.value,
        nickname: nickname.value,
        year,
        workPosition: workPosition.value,
      });
    }
  };

  return (
    <InputSection>
      <ValidationInput input={nickname} label="닉네임" type="text" placeholder="닉네임을 입력해주세요." />
      <ValidationInput input={password} label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." />
      <Input input={rePassword} label="비밀번호 확인" type="password" placeholder="비밀번호 확인을 입력해주세요." />
      <ErrorMessage>{rePasswordErrorMsg}</ErrorMessage>
      <Label>{'경력'}</Label>
      <select name="year" value={year} onChange={handleYearSelect}>
        <option value="신입">신입</option>
        <option value="1년차">1년차</option>
        <option value="2년차">2년차</option>
        <option value="3년차">3년차</option>
        <option value="4년차">4년차</option>
        <option value="5년차 이상">5년차 이상</option>
        <option value="10년차 이상">10년차 이상</option>
        <option value="20년차 이상">20년차 이상</option>
      </select>
      <ValidationInput
        input={workPosition}
        label="직무"
        type="text"
        placeholder="직무를 입력해주세요. ex) 프론트엔드, 백엔드 등"
      />
      <Button color={PointColor} onClick={handleSignUp}>
        {'회원가입'}
      </Button>
    </InputSection>
  );
};

const InputSection = styled.div`
  select {
    font-size: 0.8rem;
    padding: 0.5em;
    border: none;
    border-radius: 0.3em;
    height: 3em;
    margin-bottom: 0.5em;
    width: 19rem;
    :focus {
      outline: none;
    }
  }
  option {
    font-size: 1rem;
  }
`;

const Label = styled.p`
  margin-bottom: 0.5em;
  color: white;
`;

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: red;
  margin-bottom: 1em;
`;

export default SignUpSecondStep;
