import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="f_top">
          <div className="f_logo">
            <div className="logo_icon"></div>
            <h2>{t("footer.logo_text")}</h2>
          </div>

          <div className="f_contact_info">
            <div className="contact_item">
              <div className="icon_circle">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <p>{t("footer.address")}</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrow_link" />
            </div>

            <div className="contact_item">
              <div className="icon_circle">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <p>{t("footer.phone")}</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrow_link" />
            </div>
          </div>
        </div>

        <div className="f_bottom">
          <div className="social_links">
            <a href="#" className="social_btn">
              {t("footer.socials.facebook")} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <a href="#" className="social_btn">
              {t("footer.socials.instagram")} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <a href="https://t.me/Farhod00111" className="social_btn">
              {t("footer.socials.telegram")} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;