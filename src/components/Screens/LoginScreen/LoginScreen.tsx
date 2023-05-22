import React, { FC, useState } from "react";
import {
  Button,
  Card,
  Container,
  Image,
  Input,
  RegisterLink,
  Title,
} from "./styles";
import Modal from "../../Modal";

export interface Props {
  value: object;
  onLogin: any;
  onRegister: any;
  onChange: any;
  imgPath: String;
}

const RegistrationPage = ({ onRegister = () => 0, onClose = () => 0 }) => {
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
    <Card>
      <Title>Registration</Title>
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
      <Button onClick={handleRegistration}>Register</Button>
    </Card>
  );
};
const LoginPage: FC<Props> = ({
  value = {},
  imgPath = "",
  onChange = () => 0,
  onLogin = () => 0,
  onRegister = () => 0,
}) => {
  const { username, password } = value;
  const [showModal, setShowModal] = useState(false);
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
        <RegisterLink onClick={() => setShowModal(true)}>Register</RegisterLink>
      </Card>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} isShowButtons={false}>
          <RegistrationPage
            onRegister={onRegister}
            onClose={() => setShowModal(false)}
          />
        </Modal>
      )}
    </Container>
  );
};

const LoginScreen = ({
  onLogin = (value: { username: string; Password: string }) => 0,
  onRegister = () => 0,
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
      onRegister={onRegister}
    />
  );
};
export default LoginScreen;
