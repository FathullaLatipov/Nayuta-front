import React from 'react';
import './Footer.scss';
import logo from '../img/nayuta.svg';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Copyr from './cop.svg'
import { Helmet } from 'react-helmet';
import { HashLink } from 'react-router-hash-link';
import useScrollDirection from "../pages/yuridik/scroll";
import ScrollToTop from './scrollToTop';


function Footer() {
  const { t } = useTranslation();
  const scrollDirection = useScrollDirection();
  return (
    <div id='contact' className='footer-container'>
      <Helmet>
      <title>Nayuta</title>
          <meta
        name='description'
        content='Get Contact info about Nayuta Credit Bank '
        />
           <meta 
        name='keywords' content='Bank, Contacts, Nayuta, Credit'/>
      </Helmet>
      <section className='footer-subscription'>
        {/* <img className='footer-subscription-heading'
          href='/'
          src={logo}
          alt=''
        /> */}
         <HashLink smooth to="/#currency" className='footer-subscription-heading'><img src={logo} alt="" /></HashLink>

                <div className={`header2 ${scrollDirection === "down" ? "hide" : "show"}`}>
                    <HashLink smooth to="/#currency" className='footer-subscription-heading'> </HashLink>
                </div>
     <Link className='footer-subscription-heading' to='/'></Link>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/company'>{t("footer.left1")}</Link>
            <Link to='/'>{t("footer.left2")}</Link>
            <Link to='/uslugi/physical' className='greylink'>{t("footer.left3")}</Link>
            <Link to='/uslugi/yuridik' className='greylink'>{t("footer.left4")}</Link>
            <Link to='/consultation'>{t("footer.left5")}</Link>
          </div>
          <div id='child2' className='footer-link-items'>
            <Link to='/'>
              {t("footer.left6")}
            </Link>
            <a href='tel:+998781503332'>
              <i className="fa-solid fa-phone" id='icons'></i>
              +998 55 511-33-32 
            </a>
            <a href='tel:+99881863033'>
              {/* <i className="fa-solid" id='icons'></i> */}
              +998 88 186-30-33
            </a>
            <a href='tel:+998881470033'>
              {/* <i className="fa-solid" id='icons'></i> */}
              +998 88 147-00-33
            </a>
            <a href='https://t.me/nayuta_mmt' target='_blank'>
              <i className="fa-brands fa-telegram" id='icons'></i>
              Telegram
            </a>
            <a href='https://www.instagram.com/nayuta.uz/?igshid=MTIyMzRjYmRlZg%3D%3D' target='_blank'>
              <i className="fab fa-instagram" id='icons' />
              Instagram
            </a>
            <Link to='javascript:void(0)'
              onClick={() => window.location = 'mailto: info@nayuta.uz'}>
              <i className="fa-regular fa-envelope" id='icons'></i>
              info@nayuta.uz
            </Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div id='child3' className='footer-link-items'>
            <Link to='/'>{t("footer.left7")}</Link>
            <Link to='/'>{t("footer.duju")}</Link>
            <Link to='/'>{t("footer.sha")}</Link>
            <Link to='/'>{t("footer.yak")}</Link>
          </div>
          <div className='footer-link-items'>
            <Link to='/' className='addresslink'>{t("footer.left8")}</Link>
            <Link to='https://yandex.uz/maps/10335/tashkent/?ll=69.263914%2C41.275492&mode=search&sll=69.264000%2C41.275333&source=constructorLink&text=41.275333%2C69.264000&um=constructor%3Aa6d13edbb38b22e4c446f8712bf01729428a23a560aab6b90796c6c27bf05b58&z=18.56' target='_blank' className='address'>

              {t("footer.left9")}
              <br />
              {/* {t("footer.left10")} */}
            </Link>
            <br />
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'><img src={Copyr} alt="" /> {t("prava.title")}</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;