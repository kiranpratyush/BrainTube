import React from 'react';
import { useHistoryContext } from '../../Contexts/History.context';
import { getVideoListById } from '../../Api functions/getVideosById';
import { Header } from '../../Components/Header/Header';
import { SideBar } from '../../Components/SideBar/SideBar';
import { PlayListContainer } from '../../Components/PlayListContainer/PlayListContainer';

export function HistoryPage() {
  const [historyVideo, setHistory] = React.useState([]);
  const [state, dispatch] = useHistoryContext();
  const [loading, setLoading] = React.useState(true);
  console.log(state);
  React.useEffect(() => {
    setLoading(true);
    getVideoListById(state).then((data) => {
      setHistory(data);
      setLoading(false);
    });
  }, [state, dispatch]);
  return (
    <>
      <Header />
      <div className="playlistpage__container">
        <SideBar />
        {!loading && (
          <PlayListContainer
            playListData={historyVideo}
            name="history"
            title="Remove from history"
          />
        )}
        {loading && <h1>Loading ...</h1>}
      </div>
    </>
  );
}
