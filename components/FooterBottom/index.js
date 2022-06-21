import logo from '../../public/logo.svg';
import Image from "next/image";

const FooterBottom = () => {
    return (
        <>
            <section className="footer-bottom text-light pt-5 pb-5" data-bgcolor="#040e27" style={{background: '#46b0e0'}}>
                <div className="container">
                    <div className="footer-top">
                        <div className="footer_widget">
                            <div className="footer_logo">
                                <div style={{textAlign:'center', fill: '#fff'}}>
                                    <Image src={logo} width={200} height={200} fill="#fff"/>
                                </div>
                                <div className="copy_right text-center" style={{ fontWeight: '600', color: '#fff', marginBottom: '10px' }}>
                                    Te levando ao encontro da felicidade!<br />
                                </div>
                            </div>
                            <h4 className="copy_right text-center"><span className="contact-info__icon"><i className="ti-tablet"></i></span> 
                            Celular: (81) 98224-5535
                            </h4>

                            <h4 className="copy_right text-center"><span className="contact-info__icon"><i className="ti-email"></i></span>
                                E-mail: Viajandoomundopassagens@gmail.com
                            </h4>
                        </div>
                    </div>
                    <div className="copy-right_text">
                        <div className="container">
                            <div className="footer_border"/>
                            <div className="row">
                                <div className="col-xl-12">
                                    <p className="copy_right text-center">
                                        Copyright ©<script>document.write(new Date().getFullYear());</script>2022 | Todos os direitos reservados
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterBottom;
