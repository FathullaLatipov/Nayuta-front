import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import './Navbar.scss'
import { useState } from 'react'
import Hamburger from '../assets/images/Menu.svg'
import { useUserContext } from './context/home-context'
import { useTranslation } from 'react-i18next'

const Navbar = () => {

  const [show, setShow] = useState(false)
  const pathname = window.location.pathname
  const navigate = useNavigate()
  const { lang, setLang, active, setActive } = useUserContext()
  // useEffect(() => {
  //   
  // }, [])
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => {
    //  setAge(event.target.value);
    i18n.changeLanguage(event);
  };
  return (
    <>
      <div className="navbar-header">
        <div className="navbar-inner container">
          <div className="hamburger">
            <button style={{
              background: "transparent",
              border: "none",
              outline: "none"
            }}
              onClick={() => setActive(!active)}
            >
              <img src={Hamburger} alt="" />
            </button>
          </div>
          <div className="logo">
            <Link to='/'><img src={Logo} alt="" /></Link>
          </div>
          <div className={active ? "links" : "links hide"}>
            <button to='/' onClick={() => navigate('/')} className={pathname === '/' ? 'active' : ''} >{t("header.link1")}</button>
            <div className={pathname.includes("/uslugi") ? 'dropdown active' : 'dropdown'}>
              <button className={pathname === '/uslugi' ? 'uslugi-hover active' : 'uslugi-hover'} to='/uslugi'>{t("header.link2")}
                <div className='uslugi'>
                  <button to='/physical' onClick={() => navigate('/uslugi/physical')} className={pathname === '/physical' ? 'uslugulink' : 'uslugulink'}>{t("header.fiz")}</button>
                  <button to='/yuridik' onClick={() => navigate('/uslugi/yuridik')} className={pathname === '/yuridik' ? 'uslugulink' : 'uslugulink'}>{t("header.yur")}</button>
                </div>
              </button>
            </div>
            <button onClick={() => {
              navigate('/company')
            }
            } className={pathname === '/company' ? 'active' : ''} >{t("header.link3")}</button>
            <button onClick={() => {
              navigate('/consultation')
            }
            } className={pathname === '/consultation' ? 'active' : ''}>{t("header.link4")}</button>
            <a href='#contact' className={window.location.hash === '/contact' ? 'active' : ''} >{t("header.link5")}</a>
            <button onClick={() => {
              changeLanguage('ru')
              setLang("ru")
            }
            } className={lang === 'ru' ? 'lang-btn active' : 'lang-btn'}>RU</button>
            <button onClick={() => {
              changeLanguage('uz')
              setLang("uz")
            }
            } className={lang === 'uz' ? 'lang-btn active' : 'lang-btn'}>/ UZ</button>
          </div>
          <div className={active ? "links-hide" : "links-hide active"}>
            <Link onClick={() => {
              setActive(!active)

            }
            } className='navbar-link' to='/'>{t("header.link1")}</Link>
            <button style={{
              borderBottom: show ? "none" : "1px solid #628fd8",
              paddingBottom: show ? "0" : "26px"
            }} onClick={() => setShow(!show)} className='navbar-link'>{t("header.link2")}</button>

            <Link style={{
              display: show ? "block" : "none",
              borderBottom: !show ? "none" : "1px solid #628fd8"
            }} className='navbar-link active' onClick={() => {
              setActive(!active)
            }
            } to='/uslugi/physical' >{t("header.fiz")}</Link>
            <Link style={{
              display: show ? "block" : "none",
              borderBottom: !show ? "none" : "1px solid #628fd8"
            }} className='navbar-link active' onClick={() => {
              setActive(!active)
            }
            } to='/uslugi/yuridik'>{t("header.yur")}
            </Link>
            <Link className='navbar-link' onClick={() => {
              setActive(!active)
            }
            } to='/company'>{t("header.link3")}</Link>
            <Link className='navbar-link' onClick={() => {
              setActive(!active)
            }
            } to='/consultation'>{t("header.link4")}</Link>

            <a style={{
              borderBottom: "none",
              paddingBottom: "0"
            }} href='#contact' className='navbar-link' onClick={() => setActive(!active)} to='/'>{t("header.link5")}</a>
          </div>
          <div className="lang-container">
            <button onClick={() => {
              setLang("ru")
              changeLanguage('ru')
            }
            } className={lang === 'ru' ? 'lang-btn active' : 'lang-btn'}>RU</button>
            <button onClick={() => {
              setLang("uz")
              changeLanguage('uz')
            }
            } className={lang === 'uz' ? 'lang-btn active' : 'lang-btn'}>/ UZ</button>
          </div>
        </div>
      </div>

    </>
  )
}
export default Navbar