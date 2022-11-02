import Aos from "aos";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import moment from 'moment';

const SectionPrice = ({ theme }) => {
    const { register, setValue, handleSubmit, errors, reset } = useForm({});
    const [registerField, setRegisterField] = useState({});

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const onSubmit = async function (data) {
        const register = { ...registerField, ...data };
        window.open(`https://api.whatsapp.com/send?text=Olá gostaria de mais informações sobre: Origem: ${register.origin} Destino: ${register.destiny} Ida: ${moment(register.going).format('DD/MM/YYYY')} Volta: ${moment(register.return).format('DD/MM/YYYY')} Quantidade: ${register.quantity} Contato: ${register.whatsapp}&phone=5581989845674`)
    };

    return (
        <>
            {/* <section id="section-about" className={theme ? "dark-mode" : "light-mode"}> */}
            <section id="section-price">
                {/* <div class="wm wm-border light  fadeInDown text-align">BemVindo</div> */}
                <div className="container">
                    <div className="row align-items-center" style={{ justifyContent: 'center' }}>
                        <div className="col-lg-6 d-flex flex-direction-column" data-aos="fade-up" style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <h2 style={{marginBottom: '20px'}} className="text-light">Compre <b></b>passagem com milhas</h2>

                            <div className="row box_central_top" style={{ justifyContent: 'center' }}>
                                <h5 style={{color: '#025a7e'}}>Solicite uma cotação rápida</h5>

                                <form className="form-contact contact_form">
                                    <div className="row">
                                        <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center">
                                            <label htmlFor="">Origem</label>
                                            <div className="form-group">
                                                <input className="form-control valid" name="origin" id="origem_top" type="text" placeholder="Origem" required
                                                    onChange={(e) => {
                                                        setRegisterField({
                                                            ...registerField,
                                                            origin: e.target.value,
                                                        });
                                                    }}
                                                     />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center">
                                            <label htmlFor="">Destino</label>
                                            <div className="form-group">
                                                <input className="form-control valid" name="destiny" id="destino_top" type="text" placeholder="Destino" required
                                                    onChange={(e) => {
                                                        setRegisterField({
                                                            ...registerField,
                                                            destiny: e.target.value,
                                                        });
                                                    }}
                                                     />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center">
                                            <label htmlFor="">Ida</label>
                                            <div className="form-group">
                                                <input className="form-control valid" name="going" id="ida_top" type="date" placeholder="Ida" required
                                                    onChange={(e) => {
                                                        setRegisterField({
                                                            ...registerField,
                                                            going: e.target.value,
                                                        });
                                                    }}
                                                     />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center">
                                            <label htmlFor="">Volta</label>
                                            <div className="form-group">
                                                <input className="form-control valid" name="volta_top" id="volta_top" type="date" placeholder="Volta" required
                                                    onChange={(e) => {
                                                        setRegisterField({
                                                            ...registerField,
                                                            return: e.target.value,
                                                        });
                                                    }}
                                                     />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center">
                                            <label htmlFor="">Quantidade</label>
                                            <div className="form-group">
                                                <input className="form-control valid" name="quantity" id="quantidade" type="number" min="0" placeholder="Quantidade" required
                                                    onChange={(e) => {
                                                        setRegisterField({
                                                            ...registerField,
                                                            quantity: e.target.value,
                                                        });
                                                    }}
                                                     />
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center">
                                            <label htmlFor="">Whatsapp</label>
                                            <div className="form-group">
                                                <input className="form-control valid" name="whatsapp" id="whatsapp" type="text" placeholder="Whatsapp" required
                                                    onChange={(e) => {
                                                        setRegisterField({
                                                            ...registerField,
                                                            whatsapp: e.target.value,
                                                        });
                                                    }}
                                                   />
                                            </div>
                                        </div>
                                        <div className="col-md-12 d-flex justify-content-center mt-3">
                                            <div className="align-center">
                                                <button className="button boxed-btn btn-default" type="submit" onClick={handleSubmit(onSubmit)}>Solicitar Cotação</button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>

                            <div className="spacer10" />

                            {/* <a href="#" class="btn-custom font-weight-bold text-white sm-mb-30">About Us</a> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionPrice;