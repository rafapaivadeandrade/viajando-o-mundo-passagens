import Aos from "aos";
import { useEffect, useState } from "react";
import Image from "next/image";
import image from '../../public/image.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagem from '../../public/franca.jpg'

const SectionDestiny = ({ dataJson }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            {/* <section id="section-about" className={theme ? "dark-mode" : "light-mode"}> */}
            <section id="section-destiny">
                <div className="popular_places_area">
                    <Slider {...settings}>
                        {dataJson.map((item) => (
                            <div className="card">
                                <div className="card-top">
                                    <Image src={item.image} alt={item.title} width={500} height={500}/>
                                </div>
                                <div className="card-bottom">
                                    <p>
                                        <span>passagem para</span>
                                    </p>
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <p></p>
                                    <div>
                                        <span>
                                            a partir de:
                                        </span>
                                    </div>
                                    <b className="text-600">
                                        R$ {item.price}
                                    </b>
                                    <p></p>
                                    <div className="rating_days d-flex justify-content-between align-center">
                                        <a
                                            href={`https://api.whatsapp.com/send?text=Olá acessei o seu site e gostaria de tirar uma dúvida&phone=5581989845674`}
                                            className="button boxed-btn btn-default" target="_blank">
                                            Compre agora
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}

export default SectionDestiny;