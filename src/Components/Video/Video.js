import React from 'react';
import ListIcon from '@mui/icons-material/List';
import './Video.css';
import { Modal } from '../Modal/Modal';
import {useAuth} from "../../Contexts/Auth.context"
 export function Video({
  title,
  timeStamp,
  views,
  profileImage,
  videoImage,
  channel,
  id
})
{ 
  const {state} = useAuth()
  const [visible,setVisible] = React.useState(false)
  function handleClick()
  {
    setVisible(visible=>!visible)
  }
  return (
    <div className="videocard">
      <img src={videoImage} alt="" className="videocard__thumbnail" />
      <div className="video__info">
        <img src={profileImage} className="avatar" alt="profile" />

        <div className="video__text">
          <span>{title}</span>
          <p>{channel}</p> 
          <p>
            {views}.{timeStamp}
          </p>
        </div>
      {state.user&&<ListIcon onClick ={handleClick} className ="video__icon"/>}
      {visible&&<Modal id ={id} close ={handleClick}/>}
      </div>
    </div>
  );
}


