import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import BannerImg from '../../assets/images/banner.png'
import "./Partners.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRight from "../../components/ArrowRight/ArrowRight";
import ArrowLeft from "../../components/ArrowLeft/ArrowLeft";
import { getCarouselData, getJapaneesePdf, getJapaneeseProducts, getJapaneeseTeam } from "../../hooks/request";
import Spinner from "../../components/loading/loading";

const Partners = () => {
    const [ data, setData ] = useState({
        carouselImages: [],
        products: [],
        teamList: [],
        pdf: {}
    });
    const [ loading, setLoading ] = useState(true);

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowRight/>,
        prevArrow: <ArrowLeft/>,
        arrows: true
    };

    const fetchData = async () => {
        try {
            const carouselData = await getCarouselData();
            const japaneseProducts = await getJapaneeseProducts();
            const japaneseTeam = await getJapaneeseTeam();
            const pdf = await getJapaneesePdf();
            setData(prev => ({ 
                ...prev, 
                carouselImages: carouselData,
                products: japaneseProducts,
                teamList: japaneseTeam,
                pdf: pdf[0]
            }));
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if(loading) {
        return <div className="loader-spinner">
            <Spinner/>
        </div>;
    }
    
    return (
        <div className="partners">
            <div className="partners__slider">
                <Slider {...settings}>
                    {data.carouselImages.map((item) => (
                        <div className="partners__slider-item">
                            <img src={item.image} alt="img"/>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="partners__company container">
                <div className="partners__company-details">
                    <h1 className="section-title">О компании</h1>
                    <p className="partners__company-text">Микрофинансовая организация Nayuta следует японской модели в своей деятельности, а опыт работы сотрудников в Японии позволяет им делиться своей экспертностью с клиентами.
                        Мы нацелены найти профессиональное решение ваших финансовых вопросов. Так строится бизнес и в Японии, где клиент и его потребности первостепенны.
                        Применяя такой подход в МФО Nayuta, мы облегчаем жизнь людям в разных финансовых ситуациях и поддерживаем развитие бизнеса.
                    </p>
                </div>
                <div className="partners__company-img">
                    <img src={BannerImg} alt=""/>
                </div>
            </div>

            <div className="partners__products container">
                <h1 className="section-title">Наши продукты</h1>
                <div className="partners__products-list">
                    {data.products.map((item) => (
                        <div class="products">
                            <div class="product-img">
                                <img src={item.image} alt=""/>
                            </div>
                            <div class="product-title">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>

            <div className="partners__structure">
                <h1 className="section-title container">Структура компании</h1>
                <div className="partners__structure-container">
                    <div className="partners__structure-content">
                        <ul className="partners__structure-list first">
                            <li className="partners__structure-item first">
                                <h3 className="partners__structure-title">Title</h3>
                                <p className="partners__structure-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, architecto.
                                </p>
                            </li>
                            <li className="partners__structure-item empty"></li>
                            <li className="partners__structure-item first">
                                <h3 className="partners__structure-title">Title</h3>
                                <p className="partners__structure-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, architecto.
                                </p>
                            </li>
                            <li className="partners__structure-item empty"></li>
                            <li className="partners__structure-item first">
                                <h3 className="partners__structure-title">Title</h3>
                                <p className="partners__structure-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, architecto.
                                </p>
                            </li>
                        </ul>
                        <ul className="partners__structure-list second">
                            <li className="partners__structure-item empty"></li>
                            <li className="partners__structure-item second">
                                <h3 className="partners__structure-title">Title</h3>
                                <p className="partners__structure-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, architecto.
                                </p>
                            </li>
                            <li className="partners__structure-item empty"></li>
                            <li className="partners__structure-item second">
                                <h3 className="partners__structure-title">Title</h3>
                                <p className="partners__structure-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, architecto.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="partners__commands container">
                <h1 className="section-title">Наша команда</h1>
                <ul className="partners__commands-list">
                    {data.teamList.map((item) => (
                        <li className="partners__commands-item">
                            <img className="partners__commands-img" src={item.image}/>
                            <div className="partners__commands-info">
                                <h4 className="partners__commands-name">{item.name}</h4>
                                {/* <span className="partners__commands-spec">Back-End developer</span> */}
                                <p className="partners__commands-text">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="partners__getpdf container">
                <a className="partners__getpdf-link" href={data.pdf.pdf} target="_blank">Get pdf</a>
            </div>

        </div>
    );
}

export default Partners;