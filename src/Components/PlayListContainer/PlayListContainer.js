import React from 'react';
import './PlayListContainer.css';
import { PlayListBar } from '../PlayListBar/PlayListBar';
import { useLikedVideosContext } from '../../Contexts/LikedVideo.Context';
import { usePlayListContext } from '../../Contexts/PlayLists';
import { useWatchLaterContext } from '../../Contexts/WatchLater.Context';
function reducerfn(previousState, action) {
  switch (action.type) {
    case 'CLOSE':
      return { ...previousState, visible: false };
    case 'OPEN':
      return {
        ...previousState,
        visible: true,
        id: action.id,
        position: action.position,
      };

    default:
      return previousState;
  }
}
export function PlayListContainer({ playListData ,name,title}) {
  const [state, dispatch] = React.useReducer(reducerfn, {
    visible: false,
    data: {},
  });
  const [_, setLikedVideo] = useLikedVideosContext();
  const {dispatch:setPlayListData} = usePlayListContext()
  const [WatchLater,setWatchLater] = useWatchLaterContext()
  function handleClick()
  {
    if(name==="liked")
    {
      setLikedVideo({type: 'REMOVE_FROM_LIKED_VIDEOS',
      payload: { id: state.id }})
    }
    else if(name==="later")
    {
      setWatchLater({type:"REMOVE_FROM_WATCH_LATER",payload:{id:state.id}})
    }
    else if(name)
    {
      setPlayListData({type:"REMOVE_FROM_PLAYLIST",payload:{name,id:state.id}})
    }
    dispatch({type:"CLOSE"})
  }
  return (
    <div
      className="playlist__container"
      onClick={() => {
        dispatch({ type: 'CLOSE' });
      }}
    >
      {playListData.map((data) => {
        return (
          <PlayListBar
            image={data[0].url}
            title={data[2]}
            channelName={data[1]}
            id={data[3]}
            modal={dispatch}
            visible={state.visible}
          />
        );
      })}
      {state.visible ? (
        <div className="playlist__modal">
          <button
            onClick={handleClick}
          >
            {title}
          </button>
        </div>
      ) : null}
    </div>
  );
}
