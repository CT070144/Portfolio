import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation items data
  const navigationItems = [
    { 
      id: 'portfolio', 
      label: 'Giới thiệu về Phúc', 
      path: '/',
      description: 'Portfolio cá nhân và dự án'
    },
    { 
      id: 'ninja-ai', 
      label: 'Chương trình Ninja AI', 
      path: '/ninja',
      description: 'Khóa học AI/ML chuyên sâu'
    }
  ];

  // Xử lý click vào navigation item
  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);
    navigate(item.path);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  // Đóng mobile menu khi click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          !headerRef.current?.contains(event.target) && 
          !mobileMenuRef.current?.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Kiểm tra active item dựa trên current path
  const getActiveItem = () => {
    const currentPath = location.pathname;
    return navigationItems.find(item => item.path === currentPath)?.id || 'portfolio';
  };

  // Render navigation links
  const renderNavLinks = (isMobile = false) => (
    navigationItems.map((item) => {
      const isActive = getActiveItem() === item.id;
      return (
        <button
          key={item.id}
          className={cx('link', { 
            active: isActive,
            'mobile-link': isMobile 
          })}
          onClick={() => handleNavClick(item)}
        >
          {item.label}
        </button>
      );
    })
  );

  return (
    <header className={cx('header')} ref={headerRef}>
      <div className={cx('container')}>
        <div className={cx('brand')} onClick={() => navigate('/')}>
          Phuc <span className={cx('dot')}>.</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className={cx('nav', 'nav-desktop')}>
          {renderNavLinks()}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={cx('mobile-menu-btn')} 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FiMenu /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={cx('mobile-dropdown', { 'mobile-dropdown-open': isMobileMenuOpen })}
        ref={mobileMenuRef}
      >
        <div className={cx('mobile-dropdown-content')}>
          <nav className={cx('nav', 'nav-mobile')}>
            {renderNavLinks(true)}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;