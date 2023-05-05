/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HomePage.scss';
// import bank from '../HomePage/bank.svg'
import Currency from '../../components/Currency';
import Products from '../../components/Products/Products';
import Calculator from '../../components/Calculator';
import TableHome from '../../components/table';
import Trust from '../../components/Trust/Trust';
import AccordionHome from '../../components/accordion/accordion-home';
import { useUserContext } from '../../components/context/home-context';
import { useTranslation } from 'react-i18next';
import Spinner from '../../components/loading/loading';

const HomePage = () => {
  const { carousels, loading } = useUserContext()
  const { t } = useTranslation();
  return (
    <>
      <Currency />
      {
        loading &&
        <Spinner stroke={"#000"} position={"static"} height={720} bgc={"#fff"} />
      }
      <div id="calculatorhref" className="container load-anim mb-5">
        <Carousel indicators={false  } interval={1000}>
          {
            carousels?.map((item, key) => (
              <Carousel.Item>
                <section className='hero'>
                  <div className='hero-container'>
                    <div className='hero-text'>
                      <h1>{item?.title}</h1>
                      <h5>{item?.descriptions}</h5>
                      <div className='see-more'>
                        {/* <a href={item?.link}>{t("button.title")}</a> */}
                      </div>
                    </div>
                    <div className="hero-img">
                      {
                        loading ?
                          <Spinner stroke={"#000"} position={"static"} height={720} bgc={"#fff"} />
                          :
                          <img src={item?.image} alt='' />
                      }
                    </div>

                  </div>
                </section>
              </Carousel.Item>
            ))
          }
        </Carousel>

        <Calculator />
        <Products />
        <TableHome />
        <Trust />
        <AccordionHome />

      </div>
    </>
  )
}

export default HomePage