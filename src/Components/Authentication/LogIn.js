import React, { useState } from 'react';
import './Login.css';
import { LogInFirebase } from '../../FireBase/logInFireBase';
import { useAuth } from '../../Contexts/Auth.context';
import { Link, useNavigate } from 'react-router-dom';
export function LogIn() {
  const [submitButtonTitle, setSubmitButtonTitle] = useState('Login');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { state, dispatch } = useAuth();
  function handleInputChange(e) {
    setUserName(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setBtnDisabled(true);
    setSubmitButtonTitle('Logging in ...');

    LogInFirebase(userName, password)
      .then((user) => {
        dispatch({ type: 'LOG_IN', user });
        setSubmitButtonTitle('Login');
        setBtnDisabled('false');
        navigate('/');
      })
      .catch((err) => {
        setBtnDisabled(false);
        setSubmitButtonTitle('Log in');
      });
  }
  return (
    <div className="form__wrapper">
      <h2>Log In</h2>
      {!state.user && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter your email</label>
          <input
            type="email"
            name="username"
            value={userName}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            type="submit"
            value={submitButtonTitle}
            readOnly
            className="submit"
            disabled={btnDisabled}
          />
          <h4>
            Not have an account yet ? <Link to="/auth/SignUp">Sign up</Link>
          </h4>
        </form>
      )}
      {state.user && <h2>You are already logged in</h2>}
    </div>
  );
}
