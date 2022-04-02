import React from 'react';
import youtube from '../../Assets/youtube.svg';
import './Header.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useAuth } from '../../Contexts/Auth.context';
import { useNavigate } from 'react-router-dom';
export function Header() {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();
  function handleNavigate() {
    !state.user ? navigate('/auth/login') : dispatch({ type: 'SIGN_OUT' });
  }
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <img src={youtube} alt="" className="header__logo" />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchSharpIcon className="header__inputButton" />
      </div>
      <button onClick={handleNavigate}>
        {state.user ? 'Log out' : 'Sign in'}
      </button>
    </div>
  );
}
