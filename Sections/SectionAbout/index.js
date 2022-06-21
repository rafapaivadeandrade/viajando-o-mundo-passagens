import Aos from "aos";
import { useEffect, useState } from "react";
import Image from "next/image";
import image from '../../public/image.png'
import { Link } from "react-scroll";

const SectionAbout = ({ theme }) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            {/* <section id="section-about" className={theme ? "dark-mode" : "light-mode"}> */}
            <section id="section-price">
                {/* <div class="wm wm-border light  fadeInDown text-align">BemVindo</div> */}
                <div class="destaque_area">
                    <div class="container">
                        <div class="row" style={{padding:'0px 50px'}}>
                            <div class="col-md-8">
                                <div style={{marginBottom: '20px'}}>Aqui você encontra voos baratos das principais companhias aéreas do mundo, com o preço de adiquirir a passagem com milhas, e o melhor, sem precisar particiar de nenhum programa de pontos! Nós temos um banco de milhas aéreas para você comprar suas passágens aéreas GOL, LATAM, AZUL, TAP e outras mais baratas, com até 40% de desconto.</div>                   
                                 <div class="button_solicitar">
                                    <Link to="section-contact" class="button boxed-btn btn-default">Solicite uma cotação</Link>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <Image src={image} width={150} height={150} className="img_destaque" />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionAbout;