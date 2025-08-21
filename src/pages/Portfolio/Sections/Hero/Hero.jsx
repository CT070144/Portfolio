import React from 'react';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import { FiCode, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { TbPalette } from 'react-icons/tb';
import { LuBrainCircuit } from 'react-icons/lu';
import styles from './Hero.module.scss';
import avatar from '~/image/avatar.jpg';
const cx = classNames.bind(styles);

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, type: 'spring', stiffness: 110 } }),
};

const Hero = () => {
  return (
    <section className={cx('hero')} id="about">
      <div className={cx('bgDecor')} aria-hidden />
      <div className={cx('container')}>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className={cx('avatarWrap')}>
          <div className={cx('avatarRing')}>
           <img src={avatar} alt="avatar" className={cx('avatar')} />
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} initial="hidden" animate="show" custom={1} className={cx('title')}>
          Nguyễn Văn <span className={cx('accent')}>Phúc</span>
        </motion.h1>

        <motion.p variants={itemVariants} initial="hidden" animate="show" custom={2} className={cx('subtitle')}>
          Lập Trình Viên <span className={cx('dot')}>•</span> CT7A <span className={cx('dot')}>•</span> KMA
        </motion.p>

        <motion.p variants={itemVariants} initial="hidden" animate="show" custom={3} className={cx('desc')}>
          HỌC VIỆN KỸ THUẬT MẬT MÃ - Academy of Cryptography Technology
        </motion.p>

        <motion.a variants={itemVariants} initial="hidden" animate="show" custom={4} href="#ninja" className={cx('cta')}>
          Tìm hiểu chi tiết về Phúc  <FiArrowRight />
        </motion.a>

        <motion.ul variants={itemVariants} initial="hidden" animate="show" custom={5} className={cx('skills')}>
          <li className={cx('skill')}>
            <div className={cx('iconBox','icon-code')}><FiCode /></div>
            <div className={cx('skillLabel')}>Lập trình</div>
          </li>
          <li className={cx('skill')}>
            <div className={cx('iconBox','icon-palette')}><TbPalette /></div>
            <div className={cx('skillLabel')}>Thiết kế</div>
          </li>
          <li className={cx('skill')}>
            <div className={cx('iconBox','icon-trending-up')}><FiTrendingUp /></div>
            <div className={cx('skillLabel')}>Marketing</div>
          </li>
          <li className={cx('skill')}>
            <div className={cx('iconBox','icon-brain-circuit')}><LuBrainCircuit /></div>
            <div className={cx('skillLabel')}>AI/ML</div>
          </li>
        </motion.ul>
      </div>
    </section>
  );
};



export default Hero;