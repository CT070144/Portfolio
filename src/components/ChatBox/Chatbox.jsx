import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FiSend } from 'react-icons/fi';
import { IoIosClose } from "react-icons/io";
import styles from './Chatbox.module.scss';
import { httpPost } from '~/services/httpClient';

const cx = classNames.bind(styles);

const SUGGESTIONS = [
  'Chương trình Ninja AI là gì?',
  'Làm thế nào để tham gia chương trình?',
  'Phúc có kinh nghiệm gì?',
  'Lộ trình học tập như thế nào?',
];

function Chatbox({ onClose }) {

  const [welcome, setWelcome] = useState(true);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]); // {role: 'user'|'ai', text: string}
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    try {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    } catch (_) {}
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  function formatAnswer(text) {
    if (!text) return '';
    let t = text.replace(/\r\n/g, '\n');
    t = t.replace(/^\s*[\*\-]\s+/gm, '• ');
    t = t.replace(/\n{3,}/g, '\n\n');
    t = t.replace(/\*\*(.*?)\*\*/g, '$1');
    t = t.split('\n').map((s) => s.trimEnd()).join('\n');
    return t.trim();
  }


  async function handleSubmit(e) {
    e.preventDefault();
    const content = message.trim();
    if (!content) return;

    setWelcome(false);
    setMessage('');
    setMessages((prev) => [...prev, { role: 'user', text: content }]);
    setIsTyping(true);

    try {
      console.log(content);
        const res = await httpPost('http://localhost:8080/portfolio/ask', { message: content });
      
      if(res.code !== 1000){
        throw new Error(res.message);
      }
      const answer = formatAnswer(res.result.message);

      // typewriter effect
      await streamAppend(answer, (chunk) => {
        setIsTyping(false);
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last && last.role === 'ai-stream') {
            const merged = prev.slice(0, -1).concat({ role: 'ai-stream', text: last.text + chunk });
            return merged;
          }
          return prev.concat({ role: 'ai-stream', text: chunk });
        });
      });

      // finalize role to ai
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last && last.role === 'ai-stream') {
          return prev.slice(0, -1).concat({ role: 'ai', text: last.text });
        }
        return prev;
      });
    } catch (err) {
      setMessages((prev) => prev.concat({ role: 'ai', text: `Xin lỗi, đã xảy ra lỗi: ${err.message}` }));
    } finally {
      setIsTyping(false);
    }
  }

  function streamAppend(text, onChunk, intervalMs = 15) {
    return new Promise((resolve) => {
      let i = 0;
      const id = setInterval(() => {
        onChunk(text.slice(i, i + 2));
        i += 2;
        if (i >= text.length) {
          clearInterval(id);
          resolve();
        }
      }, intervalMs);
    });
  }

  return (
    <div className={cx('chatbox')} role="dialog" aria-label="PhucGPT chatbox">
      <div className={cx('header')}>
        <div>
          <div className={cx('title')}>PhucGPT</div>
          <div className={cx('subtitle')}>AI Assistant</div>
        </div>
        <button className={cx('iconBtn')} onClick={onClose} aria-label="Đóng">
          <IoIosClose className={cx('icon-close')} />
        </button>
      </div>

     <div className={cx('chat-container')}>
        {welcome && (
          <>
            <div className={cx('welcome')}>
              <p>
                Xin chào! Tôi là PhucGPT. Tôi có thể giúp bạn tìm hiểu về Nguyễn Văn Huân và chương trình Ninja AI. Bạn muốn biết điều gì?
              </p>
            </div>
            <div className={cx('suggestions')}>
              {SUGGESTIONS.map((text) => (
                <button key={text} className={cx('suggestion')} onClick={() => setMessage(text)}>
                  {text}
                </button>
              ))}
            </div>
          </>
        )}

        {messages.length > 0 && (
          <div className={cx('messages')}>
            {messages.map((m, idx) => (
              <div key={idx} className={cx('msg', { 'from-user': m.role === 'user' })}>
                <div className={cx('bubble', m.role === 'user' ? 'bubble-user' : 'bubble-ai')}>{m.text}</div>
              </div>
            ))}
            {isTyping && <div className={cx('typing')}>Trợ lý AI đang trả lời...</div>}
            <div ref={messagesEndRef} />
          </div>
        )}
     </div>

      <form onSubmit={handleSubmit} className={cx('inputBar')}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Nhập câu hỏi của bạn..."
        />
        <button type="submit" className={cx('sendBtn')} aria-label="Gửi" onClick={handleSubmit}>
          <FiSend />
        </button>
      </form>
    </div>
  );
};

export default Chatbox;


