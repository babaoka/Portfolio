import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

// videoタグはsrc要素でビデオのパスを定義して、autoplay属性は、読み込んで再生可能の状態になったら、即座に再生してくれるもの。loop属性は、末尾に行ったら先頭にもどしてくれるもの。muted属性は動画を音声なしに再生してくれるもの。多分ここは、サイトの表紙を飾るところな気がする。
function HeroSection() {
  return(
    <div className='hero-container'>
      <video src="/videos/video.mp4" autoPlay loop muted />
      <h1>My Introduction</h1>
      <p>機能の練習</p>
      <p>Javascript,react,firebase,font Awesome</p>
      <p>会津大学 馬場駿一</p>
    </div>
  );
};

export default HeroSection;