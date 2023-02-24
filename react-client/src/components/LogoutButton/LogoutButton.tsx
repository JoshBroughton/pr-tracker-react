import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface LogoutProps  {
  className: string
}

let redirect_url:string | undefined;
if (process.env.NODE_ENV === 'development') {
  redirect_url = window.location.origin;
} else {
  redirect_url = 'https://joshbroughton.github.io/pr-tracker-react/';
}

const LogoutButton = (props:LogoutProps) => {
  const { logout } = useAuth0();

  return (
    <button className={props.className} onClick={() => logout({ logoutParams: { returnTo: redirect_url } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;