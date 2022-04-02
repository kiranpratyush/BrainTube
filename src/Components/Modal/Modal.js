import React from 'react';
import './Modal.css';
import { ModalRow } from './ModalRow';
import { LikedVideoModalRow } from './LikedVideoModal';
import { WatchLaterModal } from './WatchLaterModal';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

export function Modal({ id, close }) {
  return (
    <div className="modal__container">
      <ModalRow
        title="Save to playlist"
        Icon={PlaylistAddIcon}
        id={id}
        close={close}
      />
      <LikedVideoModalRow id={id} close={close} />
      <WatchLaterModal id ={id} close ={close} />
    </div>
  );
}
