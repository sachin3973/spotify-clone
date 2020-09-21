import React from "react";
import "./css/Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://citytales.co.za/wp-content/uploads/2018/06/spotify-logo-png-file-spotify-badge-large-png-1280-1.png"
        alt="Logo"
      />
      <h1>Press the Login Button to access your Music</h1>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
