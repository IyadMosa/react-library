import React, { FC, useState } from "react";
import {
  Button,
  Card,
  Column,
  Container,
  ContentContainer,
  ErrorMessage,
  Image,
  Input,
  RegisterLink,
  Row,
  Title,
} from "./styles";
import Modal from "../../Modal";

export interface Props {
  onLogin: any;
  onRegister: any;
  imgPath?: String;
  errorMsg?: String;
}

const RegistrationPage = ({
  onRegister = (userData: {
    password: string;
    phoneNumber: string;
    address: { country: string; city: string; street: string };
    email: string;
    username: string;
  }) => 0,
  onClose,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleRegistration = () => {
    const userData = {
      username,
      password,
      email,
      phoneNumber,
      address: {
        street,
        city,
        country,
      },
    };

    // Handle registration logic here
    onRegister(userData);
    onClose();
  };

  return (
    <ContentContainer>
      <Row>
        <Column>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Column>
        <Column>
          <Input
            type="text"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <Input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </Column>
      </Row>
      <Row>
        <Button onClick={handleRegistration}>Register</Button>
      </Row>
    </ContentContainer>
  );
};
const LoginPage: FC<Props> = ({
  imgPath = "",
  errorMsg,
  onLogin = () => 0,
  onRegister = () => 0,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    const loginData = {
      username,
      password,
    };
    onLogin(loginData);
  };
  return (
    <Container>
      <Image src={imgPath} alt="Login Image" />

      <Card>
        <Title>Login</Title>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        <Button type="submit" onClick={handleLogin}>
          Login
        </Button>
        <RegisterLink onClick={() => setShowModal(true)}>Register</RegisterLink>
      </Card>
      <Modal
        title={"Registration"}
        showButtons={false}
        disableSubmit={true}
        onSubmit={() => {
          setShowModal(false);
        }}
        onClose={() => setShowModal(false)}
        children={
          <RegistrationPage
            onRegister={onRegister}
            onClose={() => setShowModal(false)}
          />
        }
        isOpen={showModal}
      />
    </Container>
  );
};

const LoginScreen = ({
  onLogin = (value: { username: string; Password: string }) => 0,
  onRegister = () => 0,
  imgPath = "",
  errorMsg,
}) => {
  return (
    <LoginPage
      onLogin={onLogin}
      imgPath={imgPath}
      onRegister={onRegister}
      errorMsg={errorMsg}
    />
  );
};
export default LoginScreen;
