import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

//ここはみたまんまのコード。
function Cards() {
  return (
    <div className='cards'>
      <h1>自分を作る環境</h1>
      <div className='card__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src="images/port1.jpg"
              text='私はヨークベニマルで2.5年働いています。楽しく働かせてもらってます。'
              label='アルバイト'
              path='/services'
            />
            <CardItem 
              src="images/port2.jpg"
              text='会津の雪はとても多いです。歴史ある街で道路の一方通行がとても多く、困っています。'
              label='会津若松'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem 
              src="images/port3.jpg"
              text='大学生活では無くてはならない存在です。大きな祭りでは髪を金色にすることもあります。'
              label='よさこいサークル'
              path='/services'
            />
            <CardItem 
              src="/images/port4.jpg"
              text='ボーリングをすることが好きです。ここの会員になろうか本気で悩んだことがあります。'
              label='趣味'
              path='/services'
            />
            <CardItem 
              src="/images/port5.jpg"
              text='名前はマツコです。話しかけても顔色1つ変えません。爪をなかなか切らせてくれないのが最近の悩みです。'
              label='ペット'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;