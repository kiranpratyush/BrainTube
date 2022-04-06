import React, { useState } from 'react';
import './Login.css';
import { signUpFireBase } from '../../FireBase/SignUpFireBase';
import { useAuth } from '../../Contexts/Auth.context';
import { Link, useNavigate } from 'react-router-dom';
export function SignUp() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { state, dispatch } = useAuth();
  function handleInputChange(e) {
    setError('');
    setUserName(e.target.value);
  }
  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
    setError('');
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setError('');
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Password does not match');
      return;
    }
    setError('');
    signUpFireBase(userName, password)
      .then((user) => {
        dispatch({ type: 'LOG_IN', user });
        navigate('/');
      })
      .catch((err) => setError(' something went wrong'));
  }
  return (
    <div className="form__wrapper">
      <h2>Sign Up</h2>
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
          <label htmlFor="confirmPassword">Confirm your password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <input type="submit" value="Sign up" readOnly className="submit" />
          {error ? <h4>{error}</h4> : null}
          <h4>
            Already have an account ? <Link to="/auth/LogIn">Log in</Link>
          </h4>
        </form>
      )}
      {state.user && <h2>You are already logged in</h2>}
    </div>
  );
}
