import Button from '@/components/common/Button';
import ValidationInput from '@/components/common/Input/ValidationInput';
import { useJoinMutation } from '@/hooks/queries/useUser';
import useValidationInput from '@/hooks/useValidationInput';
import { signUpState } from '@/store/users';
import { media } from '@/styles/mediaQuery';
import {
  validateNickName,
  validatePassword,
  validateRePassword,
  validateWorkPostion,
  VALIDATION_ERROR_MSG,
} from '@/utils/validations';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const SignUpSecondStep = () => {
  const router = useRouter();
  const nickname = useValidationInput('', validateNickName);
  const password = useValidationInput('', validatePassword);
  const workPosition = useValidationInput('', validateWorkPostion);
  const rePassword = useValidationInput('', validateRePassword, password.value);

  const [year, setYear] = useState('');
  const [signUp, setSignUp] = useRecoilState(signUpState);

  const mutationJoin = useJoinMutation({
    onSuccess: () => {
      router.push('/login');
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
    return rePassword.isValid && nickname.isValid && password.isValid && workPosition.isValid;
  };

  const handleSignUp = () => {
    nickname.checkValidation();
    password.checkValidation();
    rePassword.checkValidation();
    workPosition.checkValidation();

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
      <ValidationInput
        type={'text'}
        placeholder={'닉네임을 입력해주세요'}
        value={nickname.value}
        onChange={nickname.onChange}
        isValid={nickname.isValid}
        msg={VALIDATION_ERROR_MSG.EMPTY_NICKNAME}
      />
      <ValidationInput
        type={'password'}
        placeholder={'비밀번호를 입력해주세요'}
        value={password.value}
        onChange={password.onChange}
        isValid={password.isValid}
        msg={VALIDATION_ERROR_MSG.INVALID_PASSWORD}
      />
      <ValidationInput
        type={'password'}
        placeholder={'비밀번호를 다시 입력해주세요'}
        value={rePassword.value}
        onChange={rePassword.onChange}
        isValid={rePassword.isValid}
        msg={VALIDATION_ERROR_MSG.INCONSISTENCY_PASSWORD}
      />
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
        type={'text'}
        placeholder={'직군을 입력해주세요'}
        value={workPosition.value}
        onChange={workPosition.onChange}
        isValid={workPosition.isValid}
        msg={VALIDATION_ERROR_MSG.EMPTY_WORK_POSITION}
      />
      <Button onClick={handleSignUp}>{'회원가입'}</Button>
    </InputSection>
  );
};

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20em;
  ${media.mobile} {
    width: 300px;
    margin: 0 auto;
  }
  select {
    font-size: 0.8rem;
    padding: 0.5em;
    border: none;
    border-radius: 0.3em;
    height: 40px;
    margin-bottom: 1em;
    width: 100%;
    :focus {
      outline: none;
    }
  }
  option {
    font-size: 1rem;
  }
  button {
    width: 100%;
    background-color: ${({ theme }) => theme.primaryColor};
  }
  input {
    margin-bottom: 0.5em;
  }
`;

const Label = styled.p`
  margin-bottom: 0.5em;
  color: white;
  font-size: 0.8rem;
  font-weight: 800;
  ${media.tablet} {
    color: ${({ theme }) => theme.pointColor};
  }
`;

export default SignUpSecondStep;
