import React, { useEffect, useState } from 'react';
import { PlayListContainer } from '../../Components/PlayListContainer/PlayListContainer';
import { usePlayListContext } from '../../Contexts/PlayLists';
import { Header } from '../../Components/Header/Header';
import { SideBar } from '../../Components/SideBar/SideBar';
import './PlayListPage.css';
import { useParams } from 'react-router-dom';
import { getVideoListById } from '../../Api functions/getVideosById';
export function PlayListPage() {
  const params = useParams();
  const [playlistData, setPlayListData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { state } = usePlayListContext();
  const playLists = state[params.playListName];
  useEffect(() => {
    setLoading(true);
    getVideoListById(playLists).then((data) => {
      setLoading(false);
      setPlayListData(data);
    });
  }, [state, playLists]);
  return (
    <>
      <Header />
      <div className="playlistpage__container">
        <SideBar />
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <PlayListContainer playListData={playlistData} />
        )}
      </div>
    </>
  );
}
