import React from 'react';
import { useTranslation } from 'react-i18next'; 
import "./Sectiontwo.scss";

const Sectiontwo = () => {
  const { t } = useTranslation(); 

  return (
    <>
      <section className="section_two">
        <div className="container">
          <div className="content">
            <h2>{t("Sectiontwo.title")}</h2>
            <p>{t("Sectiontwo.text")}</p>
            <a href='href=https://t.me/send_masage_bot' className="contact_btn">{t("Sectiontwo.btn3")}</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sectiontwo;