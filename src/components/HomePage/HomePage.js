import React from 'react'
import '../HomePage/HomePage.css';
import creditcards from '../HomePage/creditcards.svg'
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <section className='heroasldnasljd'>
      <div className='hero-container'>
        <div className='hero-text'>
          <h1>У нас выгоднее</h1>
          <h5>Cамые низкие процентные ставки cреди микрофинансовых организаций Узбекистана.</h5>
          <a className='btn' href='#'>{t("button.title")}</a>
        </div>
        <div className="hero-img">
          <img src={creditcards} />
        </div>
      </div>
    </section>
  )
}

export default HomePage