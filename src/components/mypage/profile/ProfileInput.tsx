import Input from '@/components/common/Input';
import LabelInput from '@/components/common/Input/LabelInput';
import styled from 'styled-components';
import { UseInputReturn } from '@/hooks/useInput';
import { media } from '@/styles/mediaQuery';

interface ProfileInputProps {
  label: string;
  info: UseInputReturn;
  id: string;
}

const ProfileInput = ({ label, info, id }: ProfileInputProps) => {
  return (
    <Container>
      <CustomLabelInput label={label} htmlFor={id}>
        <CustomInput
          type="text"
          id={id}
          value={info.value}
          onChange={info.onChange}
          placeholder={info.value ?? '정보를 입력해주세요 😛'}
        />
      </CustomLabelInput>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 2em;
  width: 90%;
  ${media.mobile} {
    width: 100%;
  }
`;

const CustomLabelInput = styled(LabelInput)`
  width: 90%;
  ${media.mobile} {
    width: 100%;
  }
`;

const CustomInput = styled(Input)`
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  background: #fbfcfd;
`;

export default ProfileInput;
