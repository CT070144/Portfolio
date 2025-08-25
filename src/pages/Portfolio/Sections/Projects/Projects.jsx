import React from 'react';
import classNames from 'classnames/bind';
import { FiExternalLink, FiCode } from 'react-icons/fi';
import styles from './Projects.module.scss';
import project1 from '~/image/project1.jpg';
import project2 from '~/image/project2.jpg';
import project3 from '~/image/project3.jpg';

const cx = classNames.bind(styles);

const projects = [
  {
    title: 'KMA Journey Website',
    status: 'Đang vận hành',
    image: project1,
    desc:
      'Nền tảng AI trợ giúp soạn thảo văn bản thông minh, hỗ trợ tạo nội dung nhanh chóng, xuất file word định dạng chuẩn.',
    tags: ['React', 'Node.js', 'MySQL', 'Java'],
    demo: 'https://github.com/CT070144/IdentifyService.SpringBoot',
    code: 'https://github.com/CT070144/IdentifyService.SpringBoot',
  },
  {
    title: 'Identify service - Spring Boot',
    status: 'Đang vận hành',
    image: project2,
    desc:
      'Website landing page và tin tức giới thiệu dịch vụ truyền thông, các dự án nổi bật, xây dựng bằng React và Node.js, lưu trữ dữ liệu bằng PostgreSQL.',
    tags: ['React', 'Spring Boot', 'PostgreSQL'],
    demo: 'https://github.com/CT070144/KMAJourney_FE',
    code: 'https://github.com/CT070144/KMAJourney_BE',
  },
  {
    title: 'The Band Website',
    status: 'Đang vận hành',
    image: project3,
    desc:
      'Website tin tuyển dụng và cơ hội xuất khẩu lao động sang Hy Lạp. Phát triển trên nền tảng WordPress với giao diện thân thiện, dễ quản trị nội dung.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://github.com/CT070144/TheBand',
    code: 'https://github.com/CT070144/TheBand',
  },
];

const Projects = () => {
  return (
    <section className={cx('projectsSection')} id="projects">
      <div className={cx('container')}>
        <h2 className={cx('title')}>Dự án <span className={cx('accent')}>tiêu biểu</span></h2>
        <p className={cx('subtitle')}>Những sản phẩm công nghệ đã tạo ra tác động tích cực và mang lại giá trị thực tế cho người dùng.</p>

        <div className={cx('cards')}>
          {projects.map((p, idx) => (
            <article key={idx} className={cx('card')}>
              <div className={cx('thumbWrap')}>
                {p.image ? (
                  <img className={cx('thumb')} src={p.image} alt={p.title} />
                ) : (
                  <div className={cx('thumb', 'thumbPlaceholder')} />
                )}
              </div>

              <div className={cx('status')}>{p.status}</div>
              <h3 className={cx('cardTitle')}>{p.title}</h3>
              <p className={cx('cardDesc')}>{p.desc}</p>

              <div className={cx('tags')}>
                {p.tags.map((t) => (
                  <span key={t} className={cx('tag')}>{t}</span>
                ))}
              </div>

              <div className={cx('actions')}>
                <a className={cx('btn')} href={p.demo} target="_blank" rel="noreferrer">
                  <span className={cx('icon')}><FiExternalLink /></span>
                  Demo
                </a>
                <a className={cx('btn')} href={p.code} target="_blank" rel="noreferrer">
                  <span className={cx('icon')}><FiCode /></span>
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


