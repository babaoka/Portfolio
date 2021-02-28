import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

//sectionタグは囲まれたものだけの区間を作る。smallタグはテキストを一回り小さいサイズで表示してくれる。
function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-link">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>学歴</h2>
            <Link to='/'>矢野目小学校</Link>
            <Link to='/'>北信中学校</Link>
            <Link to='/'>福島西高等学校</Link>
            <Link to='/'>会津大学</Link>
          </div>
          <div className="footer-link-items">
            <h2>習い事(経験)</h2>
            <Link to='/'>サッカー</Link>
            <Link to='/'>空手</Link>
            <Link to='/'>水泳</Link>
            <Link to='/'>よさこい</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>経験のある言語</h2>
            <Link to='/'>C,C++</Link>
            <Link to='/'>Java</Link>
            <Link to='/'>JavaScript</Link>
            <Link to='/'>英語</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a 
            target='_blank'
            href="https://www.instagram.com/01s_abab/">Instagram
            </a>
            <Link to='/'>Clubhouse</Link>
            <a 
            target='_blank'
            href="https://twitter.com/baba_s10">Twitter
            </a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Portfolio
              <i class="fas fa-otter" />
            </Link>
          </div>
          <small class='website-rights'>会津大学 馬場駿一</small> 
          <div class='social-icons'>
            <a
              class='social-icon-link-instagram'
              href="https://www.instagram.com/01s_abab/"
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link-twitter'
              href="https://twitter.com/baba_s10"
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;