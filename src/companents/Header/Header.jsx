import React from 'react'
import "./Header.scss"; // 1. Stilni uladik
// i18n importiga ehtiyoj yo'q, chunki useTranslation hooki ichidan i18n obyekti keladi
import { useTranslation } from 'react-i18next'

const Header = () => {
    const { t, i18n } = useTranslation(); 

    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <>
            <header>
    <div className="container">
        <div className="navbar">
            <img src="src/companents/Header/img/dizn_logo.png" alt="Logo" />
            
            <nav>
                <ul>
                    <li><a href="/">{t("header.home")}</a></li>
                    <li><a href="/">{t("header.about")}</a></li>
                    <li><a href="/">{t("header.services")}</a></li>
                    <li><a href="/">{t("header.contact")}</a></li>
                </ul>
            </nav>

            <div className="actions">
                <select value={i18n.language} onChange={handleChangeLanguage}>
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
                <button>{t("header.login")}</button>
            </div>
        </div>
    </div>
</header>
        </>
    )
}

export default Header