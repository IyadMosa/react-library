import React, { FC } from "react";
import {
  ButtonsWrapper,
  Container,
  ContentsWrapper,
  HeaderWrapper,
  TitleWrapper,
  XWrapper,
} from "./style";

export interface ModalProps {
  title?: string;
  children?: any;
  onClose?: any;
  onSubmit?: any;
  isShowButtons?: boolean;
}

const Modal: FC<ModalProps> = ({
  children,
  onClose = () => 0,
  onSubmit = () => 0,
  isShowButtons = true,
  title = "",
}) => {
  return (
    <Container className={"modal"}>
      <HeaderWrapper>
        <TitleWrapper>{title}</TitleWrapper>
        <XWrapper>
          <span onClick={onClose}>X</span>
        </XWrapper>
      </HeaderWrapper>
      <ContentsWrapper>{children}</ContentsWrapper>
      {isShowButtons && (
        <ButtonsWrapper>
          <button className="btn btn-success" onClick={onSubmit}>
            {"Submit"}
          </button>
          <button className="btn btn-primary" onClick={onClose}>
            {"Close"}
          </button>
        </ButtonsWrapper>
      )}
    </Container>
  );
};
export default Modal;
