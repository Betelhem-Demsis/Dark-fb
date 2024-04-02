import { Button } from "@material-ui/core";
import React from "react";
import "./login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import { signInWithPopup } from "firebase/auth";
function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-logo">
        <img
          width="300px"
          height="200px"
          src="https://logodix.com/logo/1238222.png"
          alt=""
        />
        <h3 style={{ color: "white" }}>
          Connect with friends and the world around you on Facebook.
        </h3>
      </div>
      <div className="login__submit">
        <Button type="submit" onClick={signIn}>
          Sign up
        </Button>
      </div>
    </div>
  );
}

export default Login;
