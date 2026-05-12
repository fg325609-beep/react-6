import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faCertificate, faHandshake } from '@fortawesome/free-solid-svg-icons';
import "./Sectionone.scss";


const Sectionone = () => {
  const { t } = useTranslation();
  
  // Ikonkalarni tartib bilan massivga joylaymiz
  const icons = [faBrain, faCertificate, faHandshake];
  
  // JSON-dan "cards" massivini olamiz
  const cards = t("sectionone.cards", { returnObjects: true });

  return (
    <section className="section_one">
      <div className="container">
        <div className="cards_grid">
          {Array.isArray(cards) && cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="card_icon">
                {/* Har bir kartaga mos ikonkani index orqali chiqaramiz */}
                <FontAwesomeIcon icon={icons[index]} />
              </div>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectionone;