import React, { useEffect } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useLikedVideosContext } from '../../Contexts/LikedVideo.Context';

export function LikedVideoModalRow({ id, close }) {
  const [title, setTitle] = React.useState('Add to liked videos');
  const [state, dispatch] = useLikedVideosContext();
  useEffect(() => {
    const isFound = state.some((element) => element === id);
    isFound
      ? setTitle('Remove from liked videos')
      : setTitle('Add to liked videos');
  }, [title, state, id]);
  function handleClick() {
    title === 'Add to liked videos'
      ? dispatch({ type: 'ADD_TO_LIKED_VIDEOS', payload: { id } })
      : dispatch({ type: 'REMOVE_FROM_LIKED_VIDEOS', payload: { id } });
    close();
  }
  return (
    <>
      <button className="modal__row" onClick={handleClick}>
        <ThumbUpIcon />
        <span>{title}</span>
      </button>
    </>
  );
}
