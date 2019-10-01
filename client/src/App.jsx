import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <p>Hi there</p>
      <p>
        <a href="/api/auth/google">Sign in With Google</a>
        <br />
        Click here to sign in with Google Oauth
      </p>
    </>
  );
}

export default App;
