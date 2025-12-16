import './yuridik.scss'
import React, { useState } from 'react'
import YuridikImg from '../../assets/images/yuridik.svg'
import { Accordion } from 'react-bootstrap'
import parse from 'html-react-parser';
import { useUserContext } from '../../components/context/home-context'
import { useTranslation } from 'react-i18next'
import calImg from './Estimate.svg'
import { HashLink } from 'react-router-hash-link';
import useScrollDirection from "./scroll";
import { Helmet } from 'react-helmet';



const Yuridik = () => {
    const [showMore, setShowMore] = useState(false);
    const { legalcredit } = useUserContext()
    const { t } = useTranslation()
    const scrollDirection = useScrollDirection();

    return (
        <>
        <Helmet>
        <title>Nayuta</title>
          <meta
        name='description'
        content='Get info about Legal individuals in Nayuta Credit Bank '
        />
         <meta 
        name='keywords' content='Bank, Company, Legal, Individuals, Nayuta, Credit,'/>
        </Helmet>
            <HashLink smooth to="/#calculator" className='yuridikbutton-desktop'><img src={calImg} alt="" />{t("physical.btn")}</HashLink>
            <div className='container yuridik load-anim'>
                <div className={`header2 ${scrollDirection === "down" ? "hide" : "show"}`}>
                    <HashLink smooth to="/#calculator" className='yuridikbutton'> <img src={calImg} alt="" />{t("physical.btn")}</HashLink>
                </div>

                <div className="yuridik-banner">
                    <div className="banner-title">
                        <h2>{t("yuridik.title")}</h2>
                        <p>{t("yuridik.text1")}</p>
                    </div>
                    <div className="banner-img">
                        <img src={YuridikImg} alt="" />
                    </div>

                </div>
<div className="accordions">
    <Accordion defaultActiveKey="0">
        <div className="grid-accordion">
            {legalcredit?.map((item, key) => (
                <Accordion.Item eventKey={key} key={key}>
                    <Accordion.Header>
                        <h2 style={{ display: "flex" }}>
                            {item.title}
                        </h2>
                        <p>{item?.short_description}</p>
                    </Accordion.Header>
                    <Accordion.Body>
                        {parse(
                            `${item?.long_description
                                .toString()
                                .replaceAll('&nbsp;', ' ')}`
                        )}

                        <div className="sale">
                            {/* Обнуляем margin-bottom у всех <p> внутри .sale */}
                            <style jsx>{`
                                .sale p {
                                    margin-bottom: 0;
                                }
                            `}</style>

                            {item.title === "Факторинг" || item.title === "Faktoring" ? (
                                <>
                                    <img src={item.first_image} alt="" />
                                    <img src={item.second_image} alt="" />
                                </>
                            ) : (
                                <>
                                    <p>{t("yuridik.year")}</p>
                                    <img src={item.first_image} alt="" />
                                    <p>{t("yuridik.start")}</p>
                                    <img src={item.second_image} alt="" />
                                    <p>{t("yuridik.end")}</p>
                                </>
                            )}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </div>
    </Accordion>
</div>
                <p className='producttextyur'>{t("products.text1")} <a href='https://t.me/nayuta_mmt'>{t("products.a")}</a> {t("products.text2")}</p>
            </div>
        </>
    )
}
export default Yuridik