import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaCodepen
} from 'react-icons/fa';
import WaveInve from '../../../public/img/wave.svg';
import WaveInverte from '../../../public/img/waveinvert.svg';


export function Features() {
  return (
    <section id="features" className="features" style={{backgroundColor: '#26262b'}}>
      <div className="container" data-aos="fade-up" >

        <div className="section-title">
          <h2 style={{ color: '#fff' }}>Informações</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
            <div className="icon-box mt-5 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-check" style={{ color: '#fff' }}></i>

              <h4 style={{ color: '#fff' }}>Eficiência</h4>
              <p style={{ color: '#fff' }}>Comprometemo-nos a garantir qualidade para o seu bot, com uma velocidade e desempenho inigualáveis.</p>
            </div>
            <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-brush" style={{ color: '#fff' }}></i>
              <h4 style={{ color: '#fff' }}>Personalização</h4>
              <p style={{ color: '#fff' }}>Dê personalidade ao seu bot através da customização de botões, cores e até mesmo do design dos embeds. Tenha controle total sobre a estética e funcionalidade, garantindo uma presença única e memorável.</p>
            </div>
            <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-support" style={{ color: '#fff' }}></i>
              <h4 style={{ color: '#fff' }}>Suporte</h4>
              <p style={{ color: '#fff' }}>Oferecemos suporte eficiente 24 horas por dia, 7 dias por semana, para ajudá-lo sempre que necessário.</p>
            </div>
            <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-money" style={{ color: '#fff' }}></i>
              <h4 style={{ color: '#fff' }}>Forma de Pagamento</h4>
              <p style={{ color: '#fff' }}>Otimize suas transações com suporte a pagamentos via PIX, garantindo praticidade e segurança em cada operação financeira.</p>
            </div>
          </div>
          <div className="image col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <img src="/img/features.svg" alt="" className="img-fluid" />
          </div>
        </div>

      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
  <Image
    src={WaveInve}
    alt="Wave"
    margin-top={4000}
    width={1990}
    height={450}
    style={{
      userSelect: 'none',
      color: '#26262b',
      margin: -110,
    }}
    quality={100}
  />
</div>

    </section>
  );
}