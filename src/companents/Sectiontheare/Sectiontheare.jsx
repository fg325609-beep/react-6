import React from 'react'
import "./Sectiontheare.scss"
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faLayerGroup, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
const Sectiontheare = () => {
  const { t } = useTranslation();
  
  const iconMap = {
    faBookOpen: faBookOpen,
    faLayerGroup: faLayerGroup,
    faGraduationCap: faGraduationCap
  };

  const cards = t("service.cards", { returnObjects: true });

  return (
    <section className="service_section">
      <div className="container">
        <div className="section_header">
          <h1>{t("service.title")}</h1>
          <p>{t("service.subtitle")}</p>
        </div>

        <div className="service_cards">
          {Array.isArray(cards) && cards.map((item) => (
            <div className="service_card" key={item.id}>
              <div className="card_info">
                <h2>{item.title}</h2>
                <span className="category">{item.category}</span>
                <a href="#" className="lesson_count">{item.lessons}</a>
              </div>
              <div className="card_icon_bottom">
                <FontAwesomeIcon icon={iconMap[item.icon]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectiontheare;