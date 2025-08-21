import React from 'react';
import classNames from 'classnames/bind';
import { FiTarget, FiUsers, FiHeart, FiCheckCircle, FiMail, FiCoffee } from 'react-icons/fi';
import styles from './WorkingStyle.module.scss';

const cx = classNames.bind(styles);

const principles = [
  { icon: <FiTarget />, iconClass: 'icMint', title: 'Định hướng mục tiêu', desc: 'Luôn tập trung vào kết quả cuối cùng và giá trị mang lại cho người dùng' },
  { icon: <FiUsers />, iconClass: 'icGreen', title: 'Làm việc nhóm hiệu quả', desc: 'Tin tưởng vào sức mạnh của collaboration và knowledge sharing' },
  { icon: <FiHeart />, iconClass: 'icTeal', title: 'Đam mê học hỏi', desc: 'Không ngừng cập nhật công nghệ mới và chia sẻ kiến thức với cộng đồng' },
  { icon: <FiCheckCircle />, iconClass: 'icCyan', title: 'Chất lượng code cao', desc: 'Viết code sạch, dễ maintain và scale được trong dài hạn' },
];

const WorkingStyle = () => {
  return (
    <section className={cx('section')} id="working-style">
      <div className={cx('container')}>
        <h2 className={cx('title')}>Phong cách <span className={cx('accent')}>làm việc</span></h2>
        <p className={cx('subtitle')}>Những nguyên tắc và giá trị mà tôi theo đuổi trong mỗi dự án và collaboration.</p>

        <div className={cx('principles')}>
          {principles.map((p, i) => (
            <article key={i} className={cx('card')}>
              <div className={cx('iconWrap', p.iconClass)} aria-hidden>{p.icon}</div>
              <div>
                <h3 className={cx('cardTitle')}>{p.title}</h3>
                <p className={cx('cardDesc')}>{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={cx('bottomGrid')}>
          <div className={cx('contactCard')}>
            <h3 className={cx('contactTitle')}>Liên hệ & Thông tin cá nhân</h3>
            <ul className={cx('contactList')}>
              <li className={cx('contactItem')}>
                <span className={cx('contactIcon')}><FiMail /></span>
                <a href="mailto:vahoon23@gmail.com">vanphuctruggc@gmail.com</a>
              </li>
              <li className={cx('contactItem')}>
                <span className={cx('contactIcon')}><FiCoffee /></span>
                Coffee lover, photography enthusiast
              </li>
            </ul>
            <a className={cx('cta')} href="mailto:vanphuctruggc@gmail.com">Gửi email cho tôi</a>
          </div>

          <figure className={cx('quoteCard')}>
            <blockquote className={cx('quote')}>
              "Bất kỳ công nghệ tiên tiến nào cũng không thể phân biệt với phép thuật. Với những thế hệ trước, những gì ta cầm trong tay hôm nay hẳn đã được coi là phép màu bất khả thi. Đó chính là vẻ đẹp thật sự của sự sáng tạo con người."
            </blockquote>
            <figcaption className={cx('quoteAuthor')}>Arthur C. Clarke</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default WorkingStyle;


