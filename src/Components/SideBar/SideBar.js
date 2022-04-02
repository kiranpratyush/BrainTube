import React from 'react';
import './SideBar.css';
import { SideBarRow } from '../SideBarRow/SideBarRow';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import { PlayLists } from '../PlayLists/PlayLists';
import { usePlayListContext } from '../../Contexts/PlayLists';
export function SideBar() {
  const { state } = usePlayListContext();
  return (
    <div className="sidebar">
      <SideBarRow Icon={HomeSharpIcon} title="Home" to ="/"  />
      <SideBarRow Icon={HistorySharpIcon} title="History"  to ="/history"/>
      <SideBarRow Icon={WatchLaterSharpIcon} title="Watch Later" to = "/later"/>
      <SideBarRow Icon={ThumbUpSharpIcon} title="Liked Video"  to ="/liked"/>
      <PlayLists playListNames={Object.keys(state)} />
    </div>
  );
}
