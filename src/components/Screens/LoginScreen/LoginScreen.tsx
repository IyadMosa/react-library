import React, { FC, useState } from "react";
import {
  Button,
  Card,
  Container,
  ContentContainer,
  Image,
  ImageContainer,
  Input,
  RegisterLink,
  Title,
} from "./styles";
import { EmptyScreen } from "../../index";

export interface Props {
  value: object;
  onLogin: any;
  onChange: any;
  imgPath: String;
}

const LoginPage: FC<Props> = ({
  value = {},
  imgPath = "",
  onChange = () => 0,
  onLogin = () => 0,
}) => {
  const { username, password } = value;

  return (
    <Container>
      <Image src={imgPath} alt="Login Image" />

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
    </Container>
  );
};

const LoginScreen = ({
  onLogin = (value: { username: string; Password: string }) => 0,
  imgPath = "",
}) => {
  const emptyValue = {
    username: "",
    Password: "",
  };
  const [value, setValue] = useState(emptyValue);

  return (
    <LoginPage
      onLogin={() => onLogin(value)}
      onChange={setValue}
      value={value}
      imgPath={imgPath}
    />
  );
};
export default LoginScreen;
