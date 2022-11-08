import Button from '@/components/common/button/Button';
import { Children, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface DialogTitleProps {
  children?: ReactNode;
}

const DialogTitle = ({ children }: DialogTitleProps) => {
  return <h1 className="dialog-title">{children}</h1>;
};

const DialogTitleType = (<DialogTitle />).type;

const getDialogTitle = (children: ReactNode) => {
  return Children.toArray(children).find((child: any) => child.type === DialogTitleType);
};

interface DialogLabelButtonProps {
  children?: ReactNode;
  onClick?: (e: MouseEvent) => void;
}

const DialogLabelButton = ({ children, onClick }: DialogLabelButtonProps) => {
  return (
    <Button className="dialog-label-button" onClick={onClick}>
      {children}
    </Button>
  );
};

const DialogLabelButtonType = (<DialogLabelButton />).type;

function getDialogLabelButtons(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter((child: any) => child.type === DialogLabelButtonType).slice(0, 2);
}

interface DialoggetDialogDescriptionProps {
  children?: ReactNode;
}

const DialogDescription = ({ children }: DialoggetDialogDescriptionProps) => {
  return <div className="dialog-description">{children}</div>;
};

const DialogDescriptionType = (<DialogDescription />).type;

function getDialogDescription(children: ReactNode) {
  const childrenArray = Children.toArray(children);
  return childrenArray.filter((child: any) => child.type === DialogDescriptionType).slice(0, 2);
}

interface DialogMainProps {
  children?: ReactNode;
  isOpen: boolean;
}

function DialogMain({ children, isOpen }: DialogMainProps) {
  if (!isOpen) {
    return null;
  }

  const dialogTitle = getDialogTitle(children);
  const dialogLabelButtons = getDialogLabelButtons(children);
  const dialogDescription = getDialogDescription(children);

  return createPortal(
    <DialogBackground>
      <DialogContainer>
        <div>{dialogTitle}</div>
        {dialogDescription && <DescriptionWrapper>{dialogDescription}</DescriptionWrapper>}
        {dialogLabelButtons && <ButtonWrapper>{dialogLabelButtons}</ButtonWrapper>}
      </DialogContainer>
    </DialogBackground>,
    document.body
  );
}

export const Dialog = Object.assign(DialogMain, {
  Title: DialogTitle,
  LabelButton: DialogLabelButton,
  Description: DialogDescription,
});

const DialogBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgb(0 0 0 / 50%);
`;

const DialogContainer = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-in-out;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  width: 20em;
  height: fit-content;
  padding: 3em 2em 1em 2em;
  user-select: none;
  .dialog-title {
    color: ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
    font-weight: 800;
    margin-bottom: 1em;
  }
  .dialog-label-button {
    background-color: ${({ theme }) => theme.primaryColor};
    width: 100%;
    margin-top: 1em;
  }
  .dialog-description {
    font-size: 1rem;
    font-weight: 500;
    color: #494949;
    text-align: center;
    margin-bottom: 0.3em;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  margin-bottom: 1em;
`;
