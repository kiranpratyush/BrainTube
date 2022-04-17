import React from 'react';
import './skeleton.css';
export function VideoSkeleton() {
  return (
    <div className="skeletonvideocard">
      <div className="skeleton thumbnail"> </div>
      <div className="info">
        <div className="skeleton avatar"></div>
        <div className="skeleton text"></div>
      </div>
      <div className="skeleton text-small"></div>
    </div>
  );
}
