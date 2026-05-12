import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const Sectionone = () => {
  return (
    <section className="section_one">
      <div className="container">
        {/* Ikonka rangi va o'lchamini style orqali bersangiz bo'ladi */}
        <FontAwesomeIcon icon={faBrain} style={{ color: "#3498db", fontSize: "40px" }} />
      </div>
    </section>
  );
};

export default Sectionone;