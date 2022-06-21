/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { ToastContainer, toast } from 'react-toastify';

const phoneNumberMask = [
  '(',
  /[1-9]/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const optionsUFRG = [
  { id: 'AC', title: 'Acre' },
  { id: 'AL', title: 'Alagoas' },
  { id: 'AP', title: 'Amapa' },
  { id: 'AM', title: 'Amazonas' },
  { id: 'BA', title: 'Bahia' },
  { id: 'CE', title: 'Ceará' },
  { id: 'DF', title: 'Distrito Federal' },
  { id: 'ES', title: 'Espirito Santo' },
  { id: 'GO', title: 'Goiás' },
  { id: 'MA', title: 'Maranhão' },
  { id: 'MT', title: 'Mato Grosso' },
  { id: 'MS', title: 'Mato Grosso do Sul' },
  { id: 'MG', title: 'Minas Gerais' },
  { id: 'PA', title: 'Pará' },
  { id: 'PB', title: 'Paraíba' },
  { id: 'PR', title: 'Paraná' },
  { id: 'PE', title: 'Pernambuco' },
  { id: 'PI', title: 'Piauí' },
  { id: 'RJ', title: 'Rio de Janeiro' },
  { id: 'RN', title: 'Rio Grande do Norte' },
  { id: 'RS', title: 'Rio Grande do Sul' },
  { id: 'RO', title: 'Rondônia' },
  { id: 'RR', title: 'Roraima' },
  { id: 'SC', title: 'Santa Catarina' },
  { id: 'SP', title: 'São Paulo' },
  { id: 'SE', title: 'Sergipe' },
  { id: 'TO', title: 'Tocantins' },
];
const optionsUF = [
  { id: 'AC', title: 'Acre' },
  { id: 'AL', title: 'Alagoas' },
  { id: 'AP', title: 'Amapa' },
  { id: 'AM', title: 'Amazonas' },
  { id: 'BA', title: 'Bahia' },
  { id: 'CE', title: 'Ceará' },
  { id: 'DF', title: 'Distrito Federal' },
  { id: 'ES', title: 'Espirito Santo' },
  { id: 'GO', title: 'Goiás' },
  { id: 'MA', title: 'Maranhão' },
  { id: 'MT', title: 'Mato Grosso' },
  { id: 'MS', title: 'Mato Grosso do Sul' },
  { id: 'MG', title: 'Minas Gerais' },
  { id: 'PA', title: 'Pará' },
  { id: 'PB', title: 'Paraíba' },
  { id: 'PR', title: 'Paraná' },
  { id: 'PE', title: 'Pernambuco' },
  { id: 'PI', title: 'Piauí' },
  { id: 'RJ', title: 'Rio de Janeiro' },
  { id: 'RN', title: 'Rio Grande do Norte' },
  { id: 'RS', title: 'Rio Grande do Sul' },
  { id: 'RO', title: 'Rondônia' },
  { id: 'RR', title: 'Roraima' },
  { id: 'SC', title: 'Santa Catarina' },
  { id: 'SP', title: 'São Paulo' },
  { id: 'SE', title: 'Sergipe' },
  { id: 'TO', title: 'Tocantins' },
];

const optionsUFCRM = [
  { id: 'AC', title: 'Acre' },
  { id: 'AL', title: 'Alagoas' },
  { id: 'AP', title: 'Amapa' },
  { id: 'AM', title: 'Amazonas' },
  { id: 'BA', title: 'Bahia' },
  { id: 'CE', title: 'Ceará' },
  { id: 'DF', title: 'Distrito Federal' },
  { id: 'ES', title: 'Espirito Santo' },
  { id: 'GO', title: 'Goiás' },
  { id: 'MA', title: 'Maranhão' },
  { id: 'MT', title: 'Mato Grosso' },
  { id: 'MS', title: 'Mato Grosso do Sul' },
  { id: 'MG', title: 'Minas Gerais' },
  { id: 'PA', title: 'Pará' },
  { id: 'PB', title: 'Paraíba' },
  { id: 'PR', title: 'Paraná' },
  { id: 'PE', title: 'Pernambuco' },
  { id: 'PI', title: 'Piauí' },
  { id: 'RJ', title: 'Rio de Janeiro' },
  { id: 'RN', title: 'Rio Grande do Norte' },
  { id: 'RS', title: 'Rio Grande do Sul' },
  { id: 'RO', title: 'Rondônia' },
  { id: 'RR', title: 'Roraima' },
  { id: 'SC', title: 'Santa Catarina' },
  { id: 'SP', title: 'São Paulo' },
  { id: 'SE', title: 'Sergipe' },
  { id: 'TO', title: 'Tocantins' },
];

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .max(30, 'o nome deve ter 30 caracteres no máximo')
    .required('Nome é obrigatório '),

  email: Yup.string()
    .required('E-mail é obrigatório')
    .email('Formato de endereço de e-mail inválido')
    .test(
      'isLowerCase',
      'Email deve ser todo minúsculo',
      (email) => email && email === email.toLowerCase()
    ),

  fields: Yup.object().shape({
    contact: Yup.string().required('Celular obrigatório'),
    dateGoing: Yup.string().required('Data obrigatória'),
    dateBack: Yup.string().required('Data obrigatória'),

    state: Yup.string()
      .oneOf(
        optionsUF.map((opt) => opt.id),
        'Seleção inválida'
      )
      .required('Estado Obrigatório'),

    city: Yup.string().required('Cidade é obrigatório'),
    cityDestiny: Yup.string().required('Cidade é obrigatório'),
  }),
});

const SectionRegister = () => {
  const [initialValues, SetInitialValues] = useState({
    name: '',
    email: '',
    fields: {
      contact: '',
      city: '',
      cityDestiny: '',
      state: '',
      dateGoing: '',
      dateBack: '',
    },
    message: '',
  });

  const handleSubmit = async (values, actions) => {
    window.open(`https://api.whatsapp.com/send?text=Olá gostaria de mais informações sobre:Nome: ${values.name}, 
    Email:${values.email}, Estado: ${values.fields.state}, Origem: ${values.fields.city}, Destino: ${values.fields.cityDestiny}, 
    Ida: ${moment(values.fields.dateGoing).format('DD/MM/YYYY')}, Volta: ${moment(values.fields.dateBack).format('DD/MM/YYYY')}${values.message && `, 
    Mensagem: ${values.message}`} , Contato: ${values.fields.contact}&phone=5581982245535`)

  };


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="section-contact" className="dark-mode">
      <div className="wm wm-border dark" data-aos="fade-down">
        Contate-nos
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <h1 data-aos="fade-up" style={{ marginTop: '20px' }}>Contato</h1>
            <div className="separator">
              <span>
                <i className="fa fa-square" />
              </span>
            </div>
            <div className="spacer-single" />
          </div>
          <div className="col-md-8 offset-md-2" data-aos="fade-up">
            <Formik
              name="contactForm"
              id="contact_form"
              initialValues={initialValues}
              enableReinitialize
              validationSchema={RegisterSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleBlur, values, touched, errors }) => (
                <Form>
                  <div className="row">
                    <div className="col-md-6 mb-0">
                      <div className="form-group">
                        <Field
                          type="text"
                          name="name"
                          placeholder="Nome*"
                          className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''
                            }`}
                        />

                        <ErrorMessage
                          component="div"
                          name="name"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <Field
                          type="text"
                          name="fields[city]"
                          placeholder="Cidade Origem"
                          className={`form-control ${touched?.fields?.city && errors?.fields?.city
                            ? 'is-invalid'
                            : ''
                            }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="fields[city]"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <label>Data ida</label>
                        <Field
                          type="date"
                          name="fields[dateGoing]"
                          placeholder="UF Estado *"
                          className={` form-control ${touched?.fields?.dateGoing &&
                            errors?.fields?.dateGoing
                            ? 'is-invalid'
                            : ''
                            }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="fields[dateGoing]"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <Field
                          render={({ field }) => (
                            <MaskedInput
                              {...field}
                              mask={phoneNumberMask}
                              id="phone"
                              placeholder="Telefone com DDD*"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`form-control ${touched?.fields?.contact &&
                                errors?.fields?.contact
                                ? 'is-invalid'
                                : ''
                                }`}
                            />
                          )}
                          type="text"
                          name="fields[contact]"
                        />
                        <ErrorMessage
                          component="div"
                          name="fields[contact]"
                          className="invalid-feedback"
                        />
                      </div>


                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <Field
                          name="fields[state]"
                          component="select"
                          placeholder="UF Estado *"
                          className={`${touched?.fields?.state &&
                            errors?.fields?.state
                            ? 'is-invalid'
                            : ''
                            }`}
                          style={{
                            height: 'calc(2.25rem + 2px)',
                            padding: '10px',
                            border: 'solid 1px rgba(0, 0, 0, 0.3)',
                            width: ' 100%',
                            padding: '0.375rem 0.75rem',
                            borderRadius: '0.25rem',
                          }}
                        >
                          <option value=''>Estado *</option>
                          {optionsUF.map((option) => (
                            <option value={option.id} key={option.id}>
                              {option.title}
                            </option>
                          ))}
                        </Field>
                        
                          <ErrorMessage
                            component="div"
                            name="fields[state]"
                            className="invalid-feedback"
                          />
                      </div>

                      <div className="form-group">
                        <Field
                          type="text"
                          name="fields[cityDestiny]"
                          placeholder="Cidade Destino"
                          className={`form-control ${touched?.fields?.cityDestiny && errors?.fields?.cityDestiny
                            ? 'is-invalid'
                            : ''
                            }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="fields[cityDestiny]"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <label>Data volta</label>
                        <Field
                          type="date"
                          name="fields[dateBack]"
                          placeholder="UF Estado *"
                          className={` form-control ${touched?.fields?.dateBack &&
                            errors?.fields?.dateBack
                            ? 'is-invalid'
                            : ''
                            }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="fields[dateBack]"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <Field
                          type="text"
                          name="email"
                          placeholder="Email*"
                          className={`form-control ${touched.email && errors.email
                            ? 'is-invalid'
                            : ''
                            }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                        />
                      </div>

                    </div>

                  </div>

                  <div className="row">
                    <ToastContainer />
                  </div>
                  <div className='col-14'>
                    <label for="">Mensagem</label>
                    <div className="form-group">
                      <Field as="textarea" className="form-control w-100" name="message" id="mensagem" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Sua mensagem'" placeholder=" Sua mensagem"></Field>
                    </div>
                  </div>
                  <div className="col-md-14 text-center">
                    <button
                      data-aos="fade-up"
                      type="submit"
                      className="btn btn-primary"
                      style={{
                        width: '100%', padding: '14px 44px',
                        background: 'linear-gradient(to right, #233e91, #117fa7)'
                      }}
                    >
                      {'Enviar'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionRegister;
