// @ts-ignore
import React, { useState } from "react";
import LoginScreen from "./LoginScreen";

export default {
  title: "LoginScreen",
};

export const loginScreen = () => {
  return (
    <LoginScreen
      onLogin={(value) => console.log(value)}
      onRegister={(value) => console.log(value)}
      imgPath="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    />
  );
};

export const loginScreenError = () => {
  return (
    <LoginScreen
      onLogin={(value) => console.log(value)}
      onRegister={(value) => console.log(value)}
      errorMsg={"Invalid user or password"}
      imgPath="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    />
  );
};

export const loginScreenErrorAfterValidation = () => {
  const [error, setError] = useState("");

  return (
    <LoginScreen
      onLogin={(value) => setError("Invalid user or password")}
      onRegister={(value) => console.log(value)}
      errorMsg={error ? error : undefined}
      imgPath="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    />
  );
};
