import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = (props) => {
  const [email, updateEmail] = useState(() => {
    return "";
  });

  const [password, updatePassword] = useState(() => {
    return "";
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (e.currentTarget.className === "sign-up-continue-form") {
      props.signup({ email, password });
      updateEmail("");
      updatePassword("");
      props.clearErrors();
    } else {
      const newEmail = "admin@admin.com";
      const newPassword = "123456";
      const person = { email: newEmail, password: newPassword };
      props.login(person);
      updateEmail("");
      updatePassword("");
      props.clearErrors();
    }
  }

  return (
    <div className="outerdiv">
      <div className="sign-up-form">
        <div className="sign-up-top">
          <img src={window.logo} alt="Evernote logo" />
          <h1 className="log-in-evernote">NeverNote</h1>
          <h3>Remember everything important.</h3>
        </div>

        <div className="sign-up-middle">
          <form onSubmit={handleSubmit}>
            <div className="demo-button">
              <button type="submit">Demo for Free</button>
            </div>
          </form>
          <div className="sign-up-inputs">
            <input
              className="sign-up-email"
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => updateEmail(e.target.value)}
            />
            <input
              className="sign-up-password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => updatePassword(e.target.value)}
            />
          </div>
          <ul>
            {props.errors.length
              ? props.errors.map((error, idx) => {
                  return <li key={idx}>{error}</li>;
                })
              : ""}
          </ul>
          <form className="sign-up-continue-form" onSubmit={handleSubmit}>
            <div className="sign-up-continue">
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
        <div className="sign-up-bottom">
          <h3>Already have an account?</h3>
          <div className="redirect-to-login-signup">
            <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
