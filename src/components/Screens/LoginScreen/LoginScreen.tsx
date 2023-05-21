import React, { FC, useState } from "react";
import {
  Button,
  Card,
  Container,
  Input,
  RegisterLink,
  Title,
  ContentContainer,
  ImageContainer,
  Image,
} from "./styles";
import { EmptyScreen } from "../../index";

export interface Props {
  value: any;
  onLogin: any;
  onChange: any;
}

const LoginPage: FC<Props> = ({
  value = {},
  onChange = () => 0,
  onLogin = () => 0,
}) => {
  const { username, password } = value;

  return (
    <Container>
      <ContentContainer>
        <Card>
          <Title>Login</Title>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => onChange({ ...value, username: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => onChange({ ...value, password: e.target.value })}
          />
          <Button type="submit" onClick={onLogin}>
            Login
          </Button>
          <RegisterLink>Register</RegisterLink>
        </Card>
        <ImageContainer>
          <Image
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt="Login Image"
          />
        </ImageContainer>
      </ContentContainer>
    </Container>
  );
};

const LoginScreen = ({
  onLogin = (value: { username: string; Password: string }) => 0,
}) => {
  const emptyValue = {
    username: "",
    Password: "",
  };
  const [value, setValue] = useState(emptyValue);

  return (
    <EmptyScreen
      title={"Welcome to SmartFood Inventory"}
      page={
        <LoginPage
          onLogin={() => onLogin(value)}
          onChange={setValue}
          value={value}
        />
      }
    />
  );
};
export default LoginScreen;
