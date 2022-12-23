import React, { FC } from "react";
import { Container, InnerContainer, TitleWrapper } from "./styles";

export interface Props {
  title: string;
  page: any;
  disabled?: boolean;
}

const EmptyScreen: FC<Props> = ({ title = "", page = [], ...props }) => {
  return (
    <Container>
      <TitleWrapper>{title}</TitleWrapper>
      <InnerContainer>{page}</InnerContainer>
    </Container>
  );
};
export default EmptyScreen;
