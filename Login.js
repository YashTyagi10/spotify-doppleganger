import React from 'react';
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
    return (
      <div className="login">
        <img 
          src="https://getheavy.com/wp-content/uploadspotify2019-830*250.jpg"
          alt=""
        />
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      </div>
    );
}

export default Login;