import React, { useContext } from 'react';
import ScrollToTop from '../ScrollToTop';

const Footer = () => {

  return (
    <>
      {/* footer begin */}
      <footer id="section-about" className="style-2">
        <div className="container column">
          <div class="row justify-content-center" style={{marginBottom: '62px'}}>
            <div class="col-lg-6">
              <div class="section_title text-center mb_70">
                <h3 class="title-section">Sobre</h3>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-md-12">
                  <div class="story_info">
                    <div class="row">
                      <div class="col-lg-12">
                        <p></p><p>A partir do nosso banco de milhas, viabilizamos passagens aéreas com pontos de milhagem.&nbsp;Por esse motivo muitas vezes, os valores dos nossos voos podem chegar a até 40% mais barato&nbsp;do que comprando nas companhias. É importante lembrar, que os bilhetes são exatamente&nbsp;os mesmos que as companhias aéreas utilizam, o que muda, é que utilizaremos nossas milhas&nbsp;próprias para que você consiga um valor menor. Você poderá decolar para sua viagem sem&nbsp;precupações pois, nossa empresa atua de forma idônea e com suporte total para sua viagem.&nbsp;</p>
                        <h4>&nbsp;</h4>
                        <h4><strong>Dúvida ? Fale com a gente!&nbsp;</strong></h4>
                        <p>Nossa equipe está à disposição para esclarecer todas as suas dúvidas através de nossos canais de atendimento.</p><p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop />
      </footer>
      {/* footer close */}
    </>
  );
};

export default Footer;
