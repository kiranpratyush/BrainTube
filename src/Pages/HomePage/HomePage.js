import React from 'react';
import { SideBar } from '../../Components/SideBar/SideBar';
import { Header } from '../../Components/Header/Header';
import "./HomePage.css"
import { VideoRecommend } from '../../Components/VideoRecommender/RecommendVideo';

export function HomePage() {
  return (
    <div>
      <Header />
      <div className="container__page">
        <SideBar />
        <VideoRecommend />
      </div>
    </div>
  );
}
