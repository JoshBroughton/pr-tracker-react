import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface LoginProps  {
  className: string
}

const LoginButton = (props:LoginProps) => {
  const { loginWithRedirect } = useAuth0();

  return <button className={props.className} onClick={() => loginWithRedirect()}>Log In/Register</button>;
};

export default LoginButton;