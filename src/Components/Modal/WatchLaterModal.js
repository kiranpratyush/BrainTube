import React, { useEffect } from 'react';
import { useWatchLaterContext } from '../../Contexts/WatchLater.Context';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
export function WatchLaterModal({ id, close }) {
  const [title, setTitle] = React.useState('Watch later');
  const [state, dispatch] = useWatchLaterContext();
  useEffect(() => {
    const isFound = state.some((element) => element === id);
    isFound ? setTitle('Remove from watch later') : setTitle('Watch Later');
  }, [title, state, id]);
  function handleClick() {
    title === 'Watch Later'
      ? dispatch({ type: 'ADD_TO_WATCH_LATER', payload: { id } })
      : dispatch({ type: 'REMOVE_FROM_WATCH_LATER', payload: { id } });
    close();
  }
  return (
    <>
      <button className="modal__row" onClick={handleClick}>
        <WatchLaterIcon />
        <span>{title}</span>
      </button>
    </>
  );
}
