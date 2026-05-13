import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./Sectionfive.scss";

const Sectionfive = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(null); // Qaysi savol ochiqligini saqlaydi

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id); // Agar ochiq bo'lsa yopadi, yopiq bo'lsa ochadi
  };

  const faqData = t("faq.questions", { returnObjects: true });

  return (
    <section className="section_five">
      <div className="container">
        <div className="faq_wrapper">
          <div className="faq_left">
            <h1>{t("faq.title")}</h1>
          </div>
          
          <div className="faq_right">
            {Array.isArray(faqData) && faqData.map((item) => (
              <div 
                className={`faq_item ${activeId === item.id ? 'active' : ''}`} 
                key={item.id}
              >
                <div className="faq_question" onClick={() => toggleAccordion(item.id)}>
                  <h3>{item.question}</h3>
                  <div className="icon_box">
                    <FontAwesomeIcon icon={activeId === item.id ? faChevronUp : faChevronDown} />
                  </div>
                </div>
                
                <div className="faq_answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionfive;