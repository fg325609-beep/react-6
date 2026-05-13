import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Sectionfoo.scss";

const Sectionfoo = () => {
  const { t } = useTranslation();

  return (
    <section className="section_foo_wrapper">
      <div className="container">
        <div className="sectionfoo_card">
          <div className="section_left">
            {/* Rasm yo'lini o'zingizniki bilan tekshiring */}
            <img src="src/companents/Header/img/section_foo.png" alt="Dezinfeksiya" />
          </div>
          
          <div className="section_right">
            <div className="icon_badge">
               {/* Bu yerga rasmda ko'ringan kichik qalqon ikonkasini qo'ysangiz bo'ladi */}
               <img src="src/companents/Header/img/shield_icon.png" alt="" />
            </div>
            <h2>{t("sectionfoo.title")}</h2>
            <a href="https://t.me/your_bot" className="foo_btn">
              {t("sectionfoo.btn")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionfoo;