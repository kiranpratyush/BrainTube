import React, { useEffect, useState } from 'react';
import "./WatchLater.css"
import { PlayListContainer } from '../../Components/PlayListContainer/PlayListContainer';
import { Header } from '../../Components/Header/Header';
import { SideBar } from '../../Components/SideBar/SideBar';
import { useWatchLaterContext } from '../../Contexts/WatchLater.Context';
import { getVideoListById } from '../../Api functions/getVideosById';
export function WatchLaterVideosPage() {
  const [WatchLaterVideosData, setWatchLaterVideosData] = useState([]);
  const [state, dispatch] = useWatchLaterContext();
  useEffect(() => {
    getVideoListById(state).then((data) => setWatchLaterVideosData(data));
  }, [state, dispatch]);
  return (
    <>
      <Header />
      <div className="playlistpage__container">
        <SideBar />
        <PlayListContainer playListData={WatchLaterVideosData} />
      </div>
    </>
  );
}
