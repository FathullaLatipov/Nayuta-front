import React from 'react'
import hand from '../Physical/hand.svg'
import '../Physical/Physical.scss'
import { useUserContext } from '.././context/home-context'
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import calImg from '../../pages/yuridik/Estimate.svg'
import useScrollDirection from '../../pages/yuridik/scroll';
import '../../pages/yuridik/yuridik.scss'
import { HashLink } from 'react-router-hash-link';

const Physical = () => {
  const { individualcreditType, individualcredit, whosecredit } = useUserContext()
  const { t } = useTranslation()
  const scrollDirection = useScrollDirection();
  return (
    <div className='physicalload-anim'>
        <div className={`header2 ${scrollDirection === "down" ? "hide" : "show"}`}>
            <HashLink smooth to="/#calculator" className='yuridikbutton'> <img src={calImg} alt="" />{t("physical.btn")}</HashLink>
        </div>
        <HashLink smooth to="/#calculator" className='yuridikbutton-desktop'><img src={calImg} alt="" />{t("physical.btn")}</HashLink>
      <div className="physical-container  ">
        <div className="physical-left container">
          <h1 className='physicalh'>{t('physical.title')}</h1>
          <p className='physicalp mb-5' >
            {t('physical.text')}
          </p>
          {/* <button className='physicalbutton'>{t("physical.btn")}</button> */}

          {/* <p className='physicalp'>{t("physical.text2")}</p> */}
          {
            whosecredit?.map((item, key) => (
              <div key={key}>
                <h1 className='physicalh'>{item?.title}</h1>
                <ul>
                  <li>{item?.description}</li>
                </ul>
              </div>
            ))
          }

          {
            individualcredit?.map((item, key) => (
              <div key={key}>
                <h1 className='physicalh' >{item?.title}</h1>
                {
                  parse(
                    `${item?.description
                      .toString()
                      .replaceAll('&nbsp;', ' ')}`,
                  )
                }
              </div>
            ))
          }
        </div>
        <div className="physical-right">
          <img className='physical-img' src={hand} alt="" />
        </div>
      </div>
      <div className="physical-container2 container">
        {
          individualcreditType?.map((item, key) => (
            <>
              <div className="box">
                <div className="box-container">
                  <h3>{item?.title}</h3>
                  <p>{item?.description}</p>
                  <div className="sale">
                  <p>{t("physical.year")}</p>
                  <img src={item?.first_image} alt="" />
                    <p>{t("physical.start")}</p>
                    <img src={item?.second_image} alt="" />
                    <p>{t("physical.end")}</p>
                  
                  </div>
                </div>
              </div>
            </>
          ))
        }
         <p className='producttextph'>{t("products.text1")} <a href='https://t.me/nayuta_mmt' target='_blank'>{t("products.a")}</a> {t("products.text2")}</p>
      </div>
      {/* <div className="box3 container">
        <div className="box-container2">
          <h3>Микрозайм целевой до 30 млн сум на 36 месяцев</h3>
          <p > Поможем осуществить ваши цели. Микрозайм для путешествий, оплаты учёбы или на приобретение техники</p>
          <div className="sale2">
            <p>от</p>
            <img src={fourtyfive} alt="" />
            <p>до</p>
            <img src={fourtynine} alt="" />
            <p>в год</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Physical