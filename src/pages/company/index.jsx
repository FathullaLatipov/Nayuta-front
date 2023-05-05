import './compant.scss'
import BannerImg from '../../assets/images/banner.png'
import PdfImg from '../../assets/images/pdf.png'
import BeforeImg from '../../assets/images/beforeimg.png'
import InfImg from '../../assets/images/infinity.png'
import MyPdf from '../../98117f01-fc4b-4024-a692-67c35b2a4f50.pdf'
import { useTranslation } from 'react-i18next'
const Company = () => {
    const { t } = useTranslation()
    return (
        <div className='load-anim'>
            <div className="company-banner container">
                <div className="banner-title">
                    <h2>{t("company.title")}</h2>
                    <p>{t("company.text1")}</p>
                    <p>{t("company.text2")}</p>
                    <p>{t("company.text3")}</p>
                </div>
                <div className="banner-img">
                    <img src={BannerImg} alt="" />
                </div>
            </div>
            <div className="pdf-section">
                <div className="container">
                    <h2>{t("company.title2")}</h2>
                    <div className="pdfs">
                        <div className="pdf-item">
                            <img src={PdfImg} alt="" />
                            <a href={MyPdf} target="_blank">{t("company.btn1")}</a>
                        </div>
                        <div className="pdf-item">
                            <img src={PdfImg} alt="" />
                            <a target='_blank' href={MyPdf}>{t("company.btn2")}</a>
                        </div>
                    </div>
                </div>
                <img className='before' src={BeforeImg} alt="" />
                <img className='right' src={BeforeImg} alt="" />
                <img className='center' src={BeforeImg} alt="" />
                <img className='left' src={BeforeImg} alt="" />
            </div>
            <div className="mission container">
                <h1>{t("company.mission")}</h1>
                <div className="mission-section">
                    <div className="mission-title">
                        <p>{t("company.misson1")}</p>
                        <p>{t("company.misson2")}</p>
                    </div>
                    <div className="mission-img">
                        <img src={InfImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Company