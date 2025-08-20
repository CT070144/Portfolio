import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <div className={cx('brand')}>
         Phuc <span className={cx('dot')}>.</span>
        </div>
        <nav className={cx('nav')}>
          <a className={cx('link', 'active')} href="#about">Giới thiệu về Phúc</a>
          <a className={cx('link')} href="#ninja">Chương trình Ninja AI</a>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;