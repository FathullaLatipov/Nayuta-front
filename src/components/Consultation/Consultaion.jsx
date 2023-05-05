import React from 'react'
import '../Consultation/Consultation.scss'
import consultation from '../Consultation/consultation.svg'
import { useTranslation } from "react-i18next";

const Consultaion = () => {
  const { t } = useTranslation();
  return (
    <div className='consultation load-anim'>
      <div className="consultation-container">
        <div className="consultation-left">
          <h1>{t("consul.title")}</h1>
          <p>{t("consul.ul")}</p>
          <ul>
            <li>
              {t("consul.li1")}
            </li>
            <li>
              {t("consul.li2")}
            </li>
            <li>
              {t("consul.li3")}
            </li>
          </ul>
          <p > {t("consul.text")}</p>
          <a className='consultation-btn' href='tel:+998781503332'>{t("doveriya.callus")}</a>
        </div>
        <div className="consulatation-right">
          <img className='consultation-img' src={consultation}
            alt="consultation" />
        </div>
      </div>
    </div >
  )
}

export default Consultaion