import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaCodepen
} from 'react-icons/fa';

export function Home() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className=" col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Aumente o nível do seu Discord, mude para Thug Applications.</h1>
            <h2>Seu novo aliado em sua loja no discord</h2>
            <div><a href="#pricing" className="btn-get-started scrollto">Comprar</a></div>
          </div>
          <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="150">
            <img src="/img/robo.png" className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
