import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Hookni import qilamiz
import "./Sectiontwo.scss";

const Sectiontwo = () => {
  const { t } = useTranslation(); // 2. "t" funksiyasini e'lon qilamiz

  return (
    <>
      <section className="section_two">
        <div className="container">
          <div className="content">
            <h2>{t("Sectiontwo.title")}</h2>
            <p>{t("Sectiontwo.text")}</p>
            <button className="contact_btn">{t("Sectiontwo.btn3")}</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sectiontwo;