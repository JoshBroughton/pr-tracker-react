import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let redirect_url:string | undefined;

redirect_url = window.location.origin;


root.render(
  <Auth0Provider
    domain="dev-51h0rrt38nuipv61.us.auth0.com"
    clientId="yIdKiWfIAtCkUfsIJP0sS9joo7SCjsZQ"
    authorizationParams={{
      redirect_uri: redirect_url,
    }}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
