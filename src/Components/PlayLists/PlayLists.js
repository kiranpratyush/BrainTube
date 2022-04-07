import React from 'react';
import './PlayLists.css';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import { useNavigate } from 'react-router-dom';

export function PlayLists({ playListNames }) {
  const navigate = useNavigate();
  function handleClick(playList) {
    navigate(`/playlist/${playList}`);
  }
  return (
    <>
      {playListNames.map((playList) => (
        <nav className="playList__name" key={playList} onClick={()=>handleClick(playList)}>
          <PlaylistPlayOutlinedIcon fontSize="large" className ="playlist__icon"></PlaylistPlayOutlinedIcon>
          <span>{playList}</span>
        </nav>
      ))}
    </>
  );
}
