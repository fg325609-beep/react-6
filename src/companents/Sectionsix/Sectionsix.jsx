import React from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import "./Sectionsix.scss";

const Sectionsix = () => {
  const { t } = useTranslation();

  const sendMessage = (event) => {
    event.preventDefault();
    const token = "8765397823:AAG5pg9Fxxo3rjFyFQKZyyA2SU-II5Y2zk0";
    const chat_id = 6660879147;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("text").value;
    const phone = document.getElementById("number").value;
    const messageContent = `Ism: ${name}\nTelefon: ${phone}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      }
    })
    .then(() => {
      alert(t("sectionsix.success"));
      event.target.reset();
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <section className="section_six">
      <div className="container">
        <div className="sectionsix_wrapper">
          
          {/* Oq forma bloki */}
          <div className="form_card">
            <h1>{t("sectionsix.title")}</h1>
            <form onSubmit={sendMessage}>
              <div className="input_group">
                <input type="text" id="text" placeholder={t("sectionsix.placeholder_name")} required />
              </div>
              <div className="input_group">
                <input type="text" id="number" defaultValue="+998" required />
              </div>
              <div className="privacy_check">
                <input type="checkbox" id="privacy" required />
                <label htmlFor="privacy">{t("sectionsix.privacy")}</label>
              </div>
              <button type="submit" className="submit_btn">{t("sectionsix.btn_send")}</button>
            </form>
          </div>

          {/* O'ng tomon: Matn va Rasm */}
          <div className="content_side">
            <p className="subtitle">{t("sectionsix.subtitle")}</p>
            <div className="image_box">
              <img src="src/companents/Header/img/sectsixleft.png" alt="Specialist" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sectionsix;