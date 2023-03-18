import React from "react";

import SignIn from "../../components/sign-in/Sign-in";
import SignUp from "../../components/sign-up/Sign-up";

import "./SignIn-SignUp.scss";

const SignIn_SignUp = () => (
  <div className="signin-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignIn_SignUp;