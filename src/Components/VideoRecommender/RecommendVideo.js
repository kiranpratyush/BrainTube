import React, { useState, useEffect } from 'react';
import './Recommend.css';
import { Video } from '../Video/Video';
import { getVideoData } from '../../Api functions/popularVideo.js';
export function VideoRecommend() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getVideoData().then((data) => {
      setLoading(false);
      setData([...data]);
    });
  }, []);

  return (
    <div className="recommendedContainer" id="videoContainer">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="videconatiner">
          {data.map((videodata) => (
            <Video
              title={videodata[2]}
              timeStamp={'11'}
              views={'11'}
              profileImage={videodata[4]}
              videoImage={videodata[0].url}
              channel={videodata[1]}
              id={videodata[3]}
              key={videodata[3]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
