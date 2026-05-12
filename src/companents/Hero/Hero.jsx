import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Hero.scss"
const Hero = () => { // Nomini Hero qildik
  const { t } = useTranslation();

  return (
    <div className="hero_wrapper" role="region">
      <div className="container">
        <div className="hero_content">
          
          <div className="hero_left">
            <div className="text_block">
              <h1>{t("hero.title")}</h1>
              <p>{t("hero.text")}</p>
            </div>

            <div className="mid_anti_image">
              <img 
                src="src/companents/Header/img/anti_img.png" 
                alt="Anti-bakterial vosita" 
              />
            </div>

            <div className="btn_group">
              <button className="contact-btn">
                {t("hero.btn2")}
              </button>
              <div className="arrow_icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="hero_right">
            <img 
              src="src/companents/Header/img/dizn_img.jpg" 
              alt="Dizinfeksiya qilayotgan mutaxassis" 
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;