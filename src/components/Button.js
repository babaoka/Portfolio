import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

//スタイルを呼び出し側に指定させて判定している
const STYLES = ['btn--primary', 'btn--outline'];
//サイズを呼び出し側に指定させて判定している
const SIZES = ['btn--medium', 'btn--large'];

//
export const Button = ({
  children, 
  type, 
  onClick, 
  buttonStyle, 
  buttonSize
}) => {
  // includeは配列の中で特定の要素が入っているかどうかを判定してtrueかfalseを返す。そこを三項演算子を用いて、呼び出し側でStyleの指定がなかったならば、STYLE[0]つまり、btn--primaryになる。
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  // <Link>はリンクとして扱いたい場所を囲むことで存在事態をリンクにすること。今回は全てのボタンをsign-upのページへと飛ぶように設定した。まず、button(html)タグの要素をtype,onClick,classNameとし、呼び出し側から指定されたものをそのまま{}で代入してしまっている。おそらくだけど、childrenからbuttonSizeをpropsとして引数にもらうこともできると思う
  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button 
      className={'btn ${checkButtonStyle} ${checkButtonSize}'}
      onClick={onClick}
      type={type}
      >
        {children}
      </button>
    </Link>
  );
};
