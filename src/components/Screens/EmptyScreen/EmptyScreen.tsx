import React, { FC } from "react";
import { Container, InnerContainer, TitleWrapper } from "./styles";

export interface Props {
  title: string;
  page: any;
  disabled?: boolean;
  titleComponent?: any;
}

const EmptyScreen: FC<Props> = ({
  title = "",
  page = [],
  titleComponent = [],
  ...props
}) => {
  return (
    <Container>
      <TitleWrapper>
        {title} {titleComponent}
      </TitleWrapper>
      <InnerContainer>{page}</InnerContainer>
    </Container>
  );
};
export default EmptyScreen;
