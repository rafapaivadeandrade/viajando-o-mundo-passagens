import Aos from "aos"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import moment from "moment"
import MaskedInput from "react-text-mask"

const SectionPrice = ({ theme }) => {
  const { register, setValue, handleSubmit, errors, reset } = useForm({})
  const [registerField, setRegisterField] = useState({})
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Initial width on mount
    setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const onSubmit = async function (data) {
    const register = { ...registerField, ...data }
    window.open(
      `https://api.whatsapp.com/send?text=Olá gostaria de mais informações sobre: Origem: ${
        register.origin
      } Destino: ${register.destiny} Ida: ${moment(register.going).format(
        "DD/MM/YYYY"
      )} Volta: ${moment(register.return).format("DD/MM/YYYY")} Quantidade: ${
        register.quantity
      } Email: ${register.email} Tefelone: ${
        register.telefone
      }&phone=5581989845674 
      `
    )
  }

  return (
    <>
      {/* <section id="section-about" className={theme ? "dark-mode" : "light-mode"}> */}
      <section id="section-price">
        {/* <div class="wm wm-border light  fadeInDown text-align">BemVindo</div> */}
        <div className="container">
          <div
            className="row align-items-center"
            style={{ justifyContent: "center" }}
          >
            <div
              className="col-lg-6 d-flex flex-direction-column"
              data-aos="fade-up"
              style={{ flexDirection: "column", alignItems: "center" }}
            >
              <h2 style={{ marginBottom: "20px" }} className="text-light">
                Compre <b></b>passagem com milhas
              </h2>

              <div
                className="row box_central_top"
                style={{ justifyContent: "center" }}
              >
                <h5 style={{ color: "#e3885d" }}>
                  Solicite uma cotação rápida
                </h5>

                <form
                  className="form-contact contact_form"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div
                    style={
                      windowWidth > 1400
                        ? {
                            padding: "11px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 60,
                          }
                        : windowWidth <= 1400 && windowWidth >= 1200
                        ? {
                            padding: "11px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 25,
                          }
                        : windowWidth <= 1200 && windowWidth >= 992
                        ? {
                            padding: "11px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 0,
                          }
                        : windowWidth <= 992
                        ? {
                            padding: "11px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: 10,
                          }
                        : null
                    }
                  >
                    <div className="d-flex flex-column align-items-center">
                      {/* <div className="col-md-2 col-sm-6 d-flex flex-column align-items-center"> */}
                      <label htmlFor="" color="#fff">
                        Origem
                      </label>
                      <div className="form-group">
                        <input
                          className="form-control valid"
                          name="origin"
                          id="origem_top"
                          type="text"
                          placeholder="Origem"
                          required
                          onChange={e => {
                            setRegisterField({
                              ...registerField,
                              origin: e.target.value,
                            })
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label htmlFor="">Destino</label>
                      <div className="form-group">
                        <input
                          className="form-control valid"
                          name="destiny"
                          id="destino_top"
                          type="text"
                          placeholder="Destino"
                          required
                          onChange={e => {
                            setRegisterField({
                              ...registerField,
                              destiny: e.target.value,
                            })
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label htmlFor="">Ida</label>
                      <div className="form-group">
                        <input
                          className="form-control valid"
                          name="going"
                          id="ida_top"
                          type="date"
                          placeholder="Ida"
                          required
                          onChange={e => {
                            setRegisterField({
                              ...registerField,
                              going: e.target.value,
                            })
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label htmlFor="">Volta</label>
                      <div className="form-group">
                        <input
                          className="form-control valid"
                          name="volta_top"
                          id="volta_top"
                          type="date"
                          placeholder="Volta"
                          required
                          onChange={e => {
                            setRegisterField({
                              ...registerField,
                              return: e.target.value,
                            })
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label htmlFor="">Quantidade</label>
                      <div className="form-group">
                        <input
                          className="form-control valid"
                          name="quantity"
                          id="quantidade"
                          type="number"
                          min="0"
                          placeholder="Quantidade"
                          required
                          onChange={e => {
                            setRegisterField({
                              ...registerField,
                              quantity: e.target.value,
                            })
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label htmlFor="">Telefone</label>
                      <div className="form-group">
                        <MaskedInput
                          mask={[
                            "(",
                            /[1-9]/,
                            /\d/,
                            ")",
                            " ",
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                            "-",
                            /\d/,
                            /\d/,
                            /\d/,
                            /\d/,
                          ]}
                          className="form-control valid"
                          name="telefone"
                          id="telefone"
                          type="text"
                          placeholder="Telefone"
                          required
                          onChange={e => {
                            setRegisterField({
                              ...registerField,
                              telefone: e.target.value,
                            })
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label htmlFor="">Email</label>
                      <div className="form-group">
                        <input
                          className="form-control valid"
                          name="email"
                          id="email"
                          type="email"
                          placeholder="Email"
                          required
                          onChange={e => {
                            setRegisterField({
                              ...registerField,
                              email: e.target.value,
                            })
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 d-flex justify-content-center mt-3">
                    <div className="align-center">
                      <button
                        className="button boxed-btn btn-default"
                        type="submit"
                        onClick={handleSubmit(onSubmit)}
                      >
                        Solicitar Cotação
                      </button>
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
  )
}

export default SectionPrice
