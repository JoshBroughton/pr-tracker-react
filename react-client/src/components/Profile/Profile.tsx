import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return(<div>Loading ...</div>);
  }

  if (isAuthenticated && user) {
    return(
        <div>
            <img src={user.picture} alt={user.name} />
            <p>User ID: {user.sub}</p>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
      );
  }

  return(
    <div>
      <p>Error retreiving profile</p>
    </div>
  )
};

export default Profile;