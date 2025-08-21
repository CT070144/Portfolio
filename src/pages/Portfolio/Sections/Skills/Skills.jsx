import React from 'react';
import classNames from 'classnames/bind';
import { FiCode, FiTrendingUp, FiDatabase, FiZap } from 'react-icons/fi';
import { TbPalette } from 'react-icons/tb';
import { LuBrainCircuit } from 'react-icons/lu';
import styles from './Skills.module.scss';

const cx = classNames.bind(styles);

const items = [
  {
    icon: <FiCode />, iconClass: 'icBlue',
    title: 'Full-Stack Development',
    desc: 'Thành thạo React, Node.js, Python, với khả năng xây dựng ứng dụng web hiện đại từ frontend đến backend.'
  },
  {
    icon: <TbPalette />, iconClass: 'icPink',
    title: 'UI/UX Design',
    desc: 'Tạo ra những trải nghiệm người dùng trực quan và hấp dẫn, kết hợp giữa thẩm mỹ và tính năng.'
  },
  {
    icon: <FiTrendingUp />, iconClass: 'icOrange',
    title: 'Digital Marketing',
    desc: 'Hiểu biết SEO, social media marketing và growth hacking để phát triển sản phẩm.'
  },
  {
    icon: <LuBrainCircuit />, iconClass: 'icGreen',
    title: 'AI & Machine Learning',
    desc: 'Nghiên cứu và ứng dụng AI/ML vào các dự án thực tế, đặc biệt trong NLP và Computer Vision.'
  },
  {
    icon: <FiZap />, iconClass: 'icYellow',
    title: 'Startup Mindset',
    desc: 'Kinh nghiệm khởi nghiệp, hiểu rõ quy trình từ ý tưởng đến sản phẩm và tăng trưởng.'
  },
  {
    icon: <FiDatabase />, iconClass: 'icIndigo',
    title: 'Data & Systems',
    desc: 'Thiết kế hệ thống, cơ sở dữ liệu, tối ưu hiệu năng và khả năng mở rộng.'
  },
];

const Skills = () => {
  return (
    <section className={cx('skillsSection')} id="skills">
      <div className={cx('container')}>
        <h2 className={cx('title')}>Thế mạnh <span className={cx('accent')}>nổi bật</span></h2>
        <p className={cx('subtitle')}>Với đa dạng kỹ năng và kinh nghiệm thực tế, tôi mang đến góc nhìn toàn diện cho mọi dự án công nghệ.</p>

        <div className={cx('cards')}>
          {items.map((it, idx) => (
            <article key={idx} className={cx('card')}>
              <div className={cx('iconWrap', it.iconClass)} aria-hidden>{it.icon}</div>
              <h3 className={cx('cardTitle')}>{it.title}</h3>
              <p className={cx('cardDesc')}>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


