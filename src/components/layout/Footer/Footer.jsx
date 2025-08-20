
import React from 'react';
import classNames from 'classnames/bind';
import { FiMail, FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('container', 'top')}>
        <div className={cx('brandCol')}>
          <div className={cx('brand')}>Phúc<span className={cx('dot')}>.</span></div>
          <p className={cx('desc')}>
          Lập trình viên, nhà sáng lập và mentor passionate về việc phát triển tài năng trẻ trong lĩnh vực công nghệ và AI.
          </p>
          <div className={cx('socials')}>
            <a href="mailto:vahoon23@gmail.com" aria-label="Email"><FiMail /></a>
            <a href="https://github.com" aria-label="GitHub"><FiGithub /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://facebook.com" aria-label="Facebook"><FiFacebook /></a>
          </div>
        </div>

        <div className={cx('linksCol')}>
          <h4 className={cx('heading')}>Liên kết nhanh</h4>
          <ul className={cx('links')}>
            <li><a href="#about">Giới thiệu về Phúc</a></li>
            <li><a href="#ninja">Chương trình Ninja AI</a></li>
            <li><a href="#contact">Liên hệ</a></li>
          </ul>
        </div>

        <div className={cx('linksCol')}>
          <h4 className={cx('heading')}>Chính sách</h4>
          <ul className={cx('links')}>
            <li><a href="#privacy">Chính sách bảo mật</a></li>
            <li><a href="#terms">Điều khoản sử dụng</a></li>
          </ul>
        </div>
      </div>

      <div className={cx('bottomBar')}>
        <div className={cx('container')}>
          <small>© 2025 Nguyễn Văn Phúc. Tất cả quyền được bảo lưu.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;