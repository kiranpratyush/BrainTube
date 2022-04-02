import React from 'react';
import './Modal.css';
import { AddPlayList } from '../AddToPlayists/AddPlayList';
export function ModalRow({ title, Icon, id, close }) {
  const [visible, setVisible] = React.useState(false);
  function handleClick() {
    setVisible(
      (visible) => !visible,
    );
  }
  return (
    <>
      <button className="modal__row" onClick={handleClick}>
        <Icon />
        <span>{title}</span>
      </button>
      <AddPlayList visible={visible} click={handleClick} id={id} close ={close} />
    </>
  );
}
