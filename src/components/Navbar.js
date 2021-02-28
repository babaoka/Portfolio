import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

//useStateは状態の変更をする時に使うもの。clickをいう変数をsetClickという関数で値を変更するもの。初期値はfalseにするというもの。
function Navbar() {
  //useStateは状態の変更をする時に使うもの。clickをいう変数をsetClickという関数で値を変更する定義を行っている。初期値はfalseにするというもの。
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //上で定義(宣言)された関数の実装を行う。クリックされたら状態を反転させる。モバイルメニューを閉じるときはfalseにする。
  const handClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //sign-upのボタンをwindowの大きさによって表示するか変えている。ここでは表示するかしないかの判定を行っている。
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }; 
  //useEffectはライフサイクルを使える。ここは自信がない。おそらく下のイベントが一度だけ実行されるようなライフサイクルを実現している。
  useEffect( () => {
    showButton();
  }, []);
  //addEventListenerはたくさんのオブジェクトのイベントを対象としている。今回の場合だとWindowオブジェクトがresize(サイズを変えた時)に、showButtonを実行する。
  window.addEventListener('resize', showButton);

  //navはdivに変更しても問題はなかったが、ナビゲーションバーを作るときはこっちの方が良いっぽい。他のリンクにいるときにロゴを押すとホームに戻る。このiタグは、HTMLのiタグとは異なる。fontawesomeのサイトから直接受け取るためのタグ。サイトで検索してある程度のロゴは使える。timesは✖︎のこと。クリックすると✖︎になり、closeMobileが実行されるとbarに戻る。ulで囲まれたところは、barをクリックした時と、通常時の場合わけをしている。menuアイコンの有無はcssでやっている。
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            Portfolio <i class="fas fa-otter"></i>
          </Link>
          <div className='menu-icon' onClick={handClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}
              >
              Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}
              >
              Products
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}
              >
              SIgn Up
              </Link>
            </li>
          </ul>
          {/* ボタンがtrueになっているとき、つまりwindowが大きい時に、ボタンも表示する。 */}
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
