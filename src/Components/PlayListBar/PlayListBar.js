import React from 'react';
import './PlayListBar.css';

export function PlayListBar({ image, title, channelName }) {
  return (
    <div className="playlist">
      <div className="playlist__image">
        <img src={image} alt="playlist thumbnail" />
      </div>
      <div className="playlist__title">
        <div className="playlist__maintitle">{title}</div>
        <span>{channelName}</span>
      </div>
    </div>
  );
}
