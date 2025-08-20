import React, { useState } from 'react';
import Header from '~/components/layout/Header/Header';
import Footer from '~/components/layout/Footer/Footer';
import styles from './MainLayout.module.scss';
import { IoIosChatbubbles,IoIosClose  } from "react-icons/io";

import classNames from 'classnames/bind';
import Chatbox from '~/components/ChatBox/Chatbox';

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {open && <Chatbox onClose={() => setOpen(false)} />}
      <button className={cx('chatbot')} onClick={() => setOpen((v) => !v)} aria-label="Mở chat">
        {open ? <IoIosClose className={cx('chatbot-icon')} /> : <IoIosChatbubbles className={cx('chatbot-icon')} />}
      </button>
    </>
  );
};

export default MainLayout;


