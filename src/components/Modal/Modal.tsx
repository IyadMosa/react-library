import React, { FC, forwardRef, useCallback } from "react";
import {
  ButtonsWrapper,
  CloseButton,
  Container,
  ContentsWrapper,
  HeaderWrapper,
  TitleWrapper,
} from "./style";

export interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onSubmit?: () => void;
  showButtons?: boolean;
  disableSubmit?: boolean;
}

const Modal: FC<ModalProps> = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      children,
      onSubmit,
      showButtons = true,
      disableSubmit = false,
      title = "",
    },
    ref
  ) => {
    if (!isOpen) return null;

    const handleClose = useCallback(
      (event: React.MouseEvent) => {
        event.stopPropagation();
        onClose();
      },
      [onClose]
    );

    const handleSubmit = useCallback(
      (event: React.MouseEvent) => {
        event.stopPropagation();
        onSubmit?.();
      },
      [onSubmit]
    );

    return (
      <Container
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <HeaderWrapper>
          <TitleWrapper id="modal-title">{title}</TitleWrapper>
          <CloseButton onClick={handleClose} aria-label="Close modal">
            &times;
          </CloseButton>
        </HeaderWrapper>
        <ContentsWrapper>{children}</ContentsWrapper>
        {showButtons && (
          <ButtonsWrapper>
            <button
              className="btn btn-success"
              onClick={handleSubmit}
              disabled={disableSubmit}
            >
              Submit
            </button>
            <button className="btn btn-primary" onClick={handleClose}>
              Close
            </button>
          </ButtonsWrapper>
        )}
      </Container>
    );
  }
);

export default Modal;
