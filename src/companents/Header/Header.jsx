import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./Header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  return (
    <header className="site_header">
      <div className="container">
        <div className="nav_wrapper">
          
          <div className="logo_area">
            <img src="src/companents/Header/img/dizn_logo.png" alt="Dizinfeksiya" />
          </div>

          <nav className="desktop_nav">
            <ul>
              <li><a href="#home">{t("header.home")}</a></li>
              <li><a href="#about">{t("header.about")}</a></li>
              <li><a href="#services">{t("header.services")}</a></li>
              <li><a href="#contact">{t("header.contact")}</a></li>
            </ul>
          </nav>

          <div className="header_actions">
            <div className="lang_switcher">
              <select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </div>
            <button className="login_btn">{t("header.login")}</button>
            <button className={`menu_trigger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </div>
      <div className={`mobile_modal ${isOpen ? 'show' : ''}`}>
        <div className="modal_content">
          <ul className="mobile_menu">
            <li><a href="#home" onClick={toggleMenu}>{t("header.home")}</a></li>
            <li><a href="#about" onClick={toggleMenu}>{t("header.about")}</a></li>
            <li><a href="#services" onClick={toggleMenu}>{t("header.services")}</a></li>
            <li><a href="#contact" onClick={toggleMenu}>{t("header.contact")}</a></li>
          </ul>
          <div className="modal_footer">
             <button className="login_btn_mobile">{t("header.login")}</button>
          </div>
        </div>
        <div className="modal_backdrop" onClick={toggleMenu}></div>
      </div>
    </header>
  );
};

export default Header;