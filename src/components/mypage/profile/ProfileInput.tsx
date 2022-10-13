import Input from '@/components/common/Input/Input';
import LabelInput from '@/components/common/Input/LabelInput';
import styled from 'styled-components';
import { UseInputReturn } from '@/hooks/useInput';

const ProfileInput = ({ label, info }: { label: string; info: UseInputReturn }) => {
  return (
    <Container>
      <CustomLabelInput label={label}>
        <CustomInput
          type="text"
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
`;

const CustomLabelInput = styled(LabelInput)`
  width: 90%;
`;

const CustomInput = styled(Input)`
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  background: #fbfcfd;
`;

export default ProfileInput;
