import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface LogoutProps  {
  className: string
}

const LogoutButton = (props:LogoutProps) => {
  const { logout } = useAuth0();

  return (
    <button className={props.className} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;