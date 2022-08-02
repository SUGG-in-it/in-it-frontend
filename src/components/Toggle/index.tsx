import styled from 'styled-components';

export interface ToggleProps extends React.HTMLAttributes<Element> {
  onToggle(): void;
  isActive: boolean;
}

const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  display: flex;
  background-color: black;
`;

const Notch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transform: translate(${(props) => (props.isActive ? '26px' : '1px')});
  transition: transform 0.1s linear;
`;

const Toggle = ({ onToggle, isActive }: ToggleProps) => (
  <ToggleWrapper onClick={onToggle}>
    <Notch isActive={isActive} />
  </ToggleWrapper>
);

export default Toggle;
