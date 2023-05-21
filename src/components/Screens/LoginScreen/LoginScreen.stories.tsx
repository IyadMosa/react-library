// @ts-ignore
import React from "react";
import LoginScreen from "./LoginScreen";

export default {
  title: "LoginScreen",
};

export const loginScreen = () => {
  return <LoginScreen onLogin={(value) => console.log(value)} />;
};
