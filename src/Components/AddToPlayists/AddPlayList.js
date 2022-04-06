import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './AddPlayList.css';
import { usePlayListContext } from '../../Contexts/PlayLists';
import CloseIcon from '@mui/icons-material/Close';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreatePlayList } from '../CreateNewPlaylist/CreatePlayList';

/* */
export function AddPlayList({ id, visible, click, close }) {
  const { state, dispatch } = usePlayListContext();
  const [checked, setChecked] = useState({});
  useEffect(() => {
    const playListIncluded = {};
    for (let playListName in state) {
      if (state[playListName].some((videoid) => videoid === id)) {
        playListIncluded[playListName] = true;
      }
    }
    setChecked(playListIncluded);
  }, [state, id]);
  function handleClose() {
    click();
    close();
  }
  function handleChange(e, playlistName) {
    if (e.target.checked) {
      toast(`Added to ${playlistName}`, {
        hideProgressBar: true,
        style: { background: 'black', color: 'white' },
      });
      dispatch({
        type: 'ADD_TO_PLAYLIST',
        payload: { name: playlistName, id },
      });
    } else {
      toast(`Removed from ${playlistName}`, {
        hideProgressBar: true,
        style: { background: 'black', color: 'white' },
      });
      dispatch({
        type: 'REMOVE_FROM_PLAYLIST',
        payload: { name: playlistName, id },
      });
    }
  }
  const playListArray = [];
  for (let name in state) {
    playListArray.push(name);
  }
  return ReactDOM.createPortal(
    visible && (
      <div
        className="addtoplaylist__wrapper"
        style={{ display: `${!visible ? 'none' : 'fixed'}` }}
      >
        <ToastContainer autoClose={1000} />
        <div className="addtoplaylist__maincontainer">
          <h3>Save to playlist</h3>
          <div className="addtoplaylist__container">
            <div className="addtoplaylist__input">
              {playListArray.map((playListName) => (
                <div>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      handleChange(e, playListName);
                    }}
                    checked={checked[playListName] ? true : false}
                  />
                  <span>{playListName}</span>
                </div>
              ))}
            </div>
            <button onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
          <CreatePlayList id={id} />
        </div>
      </div>
    ),
    document.querySelector('#modal')
  );
}
