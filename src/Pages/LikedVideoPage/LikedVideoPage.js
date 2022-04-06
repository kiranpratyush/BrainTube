import React, { useEffect, useState } from 'react';
import { PlayListContainer } from '../../Components/PlayListContainer/PlayListContainer';
import { Header } from '../../Components/Header/Header';
import { SideBar } from '../../Components/SideBar/SideBar';
import { useLikedVideosContext } from '../../Contexts/LikedVideo.Context';
import './LikedVideoPage.css';
import { getVideoListById } from '../../Api functions/getVideosById';
export function LikedVideosPage() {
  const [likedVideosData, setLikedVideosData] = useState([]);
  const [state,dispatch] = useLikedVideosContext()
  useEffect(() => {
    getVideoListById(state).then((data) => setLikedVideosData(data));
  }, [state, dispatch]);
  console.log(likedVideosData);
  return (
    <>
      <Header />
      <div className="playlistpage__container">
        <SideBar />
        <PlayListContainer playListData={likedVideosData} />
      </div>
    </>
  );
}
