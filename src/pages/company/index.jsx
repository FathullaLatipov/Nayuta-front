import { useEffect, useState } from 'react'
import './compant.scss'
import BannerImg from '../../assets/images/banner.png'
import PdfImg from '../../assets/images/pdf.png'
import BeforeImg from '../../assets/images/beforeimg.png'
import InfImg from '../../assets/images/infinity.png'
import MyPdf from '../../98117f01-fc4b-4024-a692-67c35b2a4f50.pdf'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { getCompanyPageData } from '../../hooks/request'
import { useUserContext } from '../../components/context/home-context'
import Spinner from '../../components/loading/loading'

// Разбивает текст на абзацы по \r\n\r\n или \n\n
const splitParagraphs = (text) => {
    if (!text || typeof text !== 'string') return []
    return text.split(/\r?\n\r?\n/).filter(Boolean).map(s => s.trim())
}

const Company = () => {
    const { t } = useTranslation()
    const { lang } = useUserContext()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await getCompanyPageData(lang)
                setData(res && Object.keys(res).length > 0 ? res : null)
            } catch (err) {
                setData(null)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [lang])

    const getText = (key, fallbackKey) => (data?.[key] || t(fallbackKey))

    // Тексты "О компании" — API может вернуть всё в text1 или отдельно text1, text2, text3
    const aboutParagraphs = (() => {
        const t1 = getText('text1', 'company.text1')
        const t2 = getText('text2', 'company.text2')
        const t3 = getText('text3', 'company.text3')
        if (t2 || t3) return [t1, t2, t3].filter(Boolean)
        return splitParagraphs(t1).length ? splitParagraphs(t1) : [t1]
    })()

    // Тексты "Миссия" — API может вернуть всё в mission1 или отдельно
    const missionParagraphs = (() => {
        const m1 = getText('mission1', 'company.misson1')
        const m2 = getText('mission2', 'company.misson2')
        if (m2) return [m1, m2].filter(Boolean)
        return splitParagraphs(m1).length ? splitParagraphs(m1) : [m1]
    })()

    const documents = data?.documents?.length ? data.documents : []

    if (loading) {
        return (
            <div className="loader-spinner">
                <Spinner />
            </div>
        )
    }

    return (
        <div className='load-anim'>
            <Helmet>
                <title>Nayuta</title>
                <meta name='description' content='Get info about Company in Nayuta Credit Bank ' />
                <meta name='keywords' content='Bank, Company, Nayuta, Credit,' />
            </Helmet>
            <div className="company-banner container">
                <div className="banner-title">
                    <h2>{getText('title', 'company.title')}</h2>
                    {aboutParagraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>
                <div className="banner-img">
                    <img src={BannerImg} alt="" />
                </div>
            </div>
            <div className="pdf-section">
                <div className="container">
                    <h2>{t('company.title2')}</h2>
                    <div className="pdfs">
                        {documents.length > 0 ? (
                            documents.map((doc) => (
                                <div key={doc.id} className="pdf-item">
                                    <img src={PdfImg} alt="" />
                                    <a href={doc.file} target="_blank" rel="noreferrer">{doc.name}</a>
                                </div>
                            ))
                        ) : (
                            <>
                                <div className="pdf-item">
                                    <img src={PdfImg} alt="" />
                                    <a href={MyPdf} target="_blank" rel="noreferrer">{t('company.btn1')}</a>
                                </div>
                                <div className="pdf-item">
                                    <img src={PdfImg} alt="" />
                                    <a href={MyPdf} target="_blank" rel="noreferrer">{t('company.btn2')}</a>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <img className='before' src={BeforeImg} alt="" />
                <img className='right' src={BeforeImg} alt="" />
                <img className='center' src={BeforeImg} alt="" />
                <img className='left' src={BeforeImg} alt="" />
            </div>
            <div className="mission container">
                <h1>{getText('mission', 'company.mission')}</h1>
                <div className="mission-section">
                    <div className="mission-title">
                        {missionParagraphs.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
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