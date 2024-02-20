import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaCodepen
} from 'react-icons/fa';
import WaveInverte from '../../../public/img/waveinvert.svg';
import { FaMemory, FaMicrochip, FaHdd, FaSignal, FaTimes, FaCheckCircle } from "react-icons/fa";


export function Pricing() {
  return (

    <section id="pricing" className="pricing section-bg" style={{ backgroundColor: '#26262b' }}>
      <Image
        src={WaveInverte}
        alt="Wave2"
        width={1360}
        height={400}
        style={{
          userSelect: 'none',
          color: '#1a1a18',
          marginTop: '-150px',
        }}
        quality={100}
      />
      <div className="container" data-aos="fade-up">


        <div className="section-title">
          <h2 style={{ color: '#fff' }}>Preço</h2>
          <p style={{ color: '#fff' }}>O melhor preço para o melhor sistema.</p>
        </div>

        <div className="row justify-content-center" >

          <div className="col-lg-3 col-md-6 mt-4 mt-md-0 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="box featured " style={{ backgroundColor: '#1a1a18', border: '2px solid #3b82f6' }}>

              <h3 style={{ backgroundColor: '#000' }}>Sistema de vendas FREE</h3>
              <h4 style={{ color: '#fff' }}>R$0.00<span> </span></h4>
              <h5 style={{ color: '#fff' }}>Hospedado Gratuitamente</h5>
              <br></br>
              <ul>

                <li style={{ color: '#fff' }}><span style={{ color: '#4CAF50' }}>✔</span> Painel de Controle para Gerenciamento de vendas</li>
                <li style={{ color: '#fff' }}><span style={{ color: '#4CAF50' }}>✔</span> Totalmente personalizável</li>
                <li style={{ color: '#fff' }}><span style={{ color: '#4CAF50' }}>✔</span> Integração Mercado Pago</li>
                <li style={{ color: '#fff' }}><span style={{ color: '#4CAF50' }}>✔</span> Sistema de Tickets</li>
                <li className="na"><span style={{ color: '#FF0000' }}>x</span> Sem acesso aos arquivos</li>
              </ul>
              <div className="btn-wrap" style={{ backgroundColor: '#1a1a18' }}>
                <a href="https://discord.gg/9QVvGMsqbW" className="btn-buy">Criar</a>
              </div>

            </div>
          </div> 
          {/*<div className="image col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <img src="/img/plans.svg" alt="" className="img-fluid" style={{ maxWidth: "500px", height: "auto" }} />
          </div>
      */}
        </div>
      </div>
    </section>
  );
}


//col-lg-3 col-md-6 mt-4 mt-md-0