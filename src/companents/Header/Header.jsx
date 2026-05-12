import React from 'react'
// import "./Header.scss"
// i18n importiga ehtiyoj yo'q, chunki useTranslation hooki ichidan i18n obyekti keladi
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t, i18n } = useTranslation(); 

    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <div>
            <header>
                <div className="navbar">
                    <img src="src/companents/Header/img/dizn_logo.png" alt="" />
                    <nav>
                        <ul>
                            <a href="/">{t("header.home")}</a>
                            <a href="/">{t("header.about")}</a>
                            <a href="/">{t("header.services")}</a>
                            <a href="/">{t("header.contact")}</a>
                        </ul>
                    </nav>
                    <select value={i18n.language} onChange={handleChangeLanguage}>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                    <button></button>
                </div>
            </header>
        </div>
    )
}

export default Header