import React from 'react';
import './CreatePlayList.css';
import { usePlayListContext } from '../../Contexts/PlayLists';
export function CreatePlayList({ id }) {
  const [value, setValue] = React.useState('');
  const { dispatch } = usePlayListContext();
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleClick() {
    dispatch({
      type: 'ADD_TO_PLAYLIST',
      payload: { name: value, id },
    });
  }
  return (
    <div className="createplaylist__container">
      <label htmlFor="Name" className="createplaylist__label">
        Name
      </label>
      <input
        value={value}
        id="Name"
        placeholder="Enter playlist name"
        className="createplaylist__input"
        onChange={handleChange}
      />
      <button onClick={handleClick} className="createplaylist__button">
        CREATE
      </button>
    </div>
  );
}
