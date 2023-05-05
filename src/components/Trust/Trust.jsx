import React from 'react'
import '../Trust/Trust.scss'
import approval from '../Trust/approval.svg'
import thumbup from '../Trust/thumbup.svg'
import { useTranslation } from 'react-i18next'

const Trust = () => {
  const { t } = useTranslation();
  return (
    <section className='trust'>
      <div className='trust-container'>
        <div className='trust-text'>
          <h1>{t("doveriya.title")}</h1>
          <p>{t("doveriya.text")}<a className='license' href='https://cbu.uz/upload/licen/mmt/97_nayuta.jpg'>{t("doveriya.link")}</a></p>
          <h5>{t("doveriya.questions")}</h5>
          <p className='text2'>{t("doveriya.call")}</p>
          <a className='trust-btn' href='tel:+998781503332'>{t("doveriya.callus")}</a>
        </div>
        <div className='trust-img'>
          <img className='approval' src={approval} alt='' />
          <img className='thumbup' src={thumbup} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Trust