import React from 'react';
import classNames from 'classnames/bind';
import Hero from './Sections/Hero/Hero';
import Skills from './Sections/Skills/Skills';
import Projects from './Sections/Projects/Projects';
import WorkingStyle from './Sections/WorkingStyle/WorkingStyle';
import styles from './Portfolio.module.scss';

const cx = classNames.bind(styles);

const Portfolio = () => {
  return (
    <div className={cx('portfolio')}>
      <Hero />
      <Skills />
      <Projects />
      <WorkingStyle />
    </div>
  );
};

export default Portfolio;
