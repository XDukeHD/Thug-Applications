import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaCodepen
} from 'react-icons/fa';

export function Counts() {
  return (
    <section id="counts" className="counts">
    <div className="container">

      <div className="row counters">

        <div className="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">NaN</span>
          <p>Clientes</p>
        </div>

        <div className="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">2</span>
          <p>Apps Free</p>
        </div>

        <div className="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">0</span>
          <p>Apps Pagos</p>
        </div>

        <div className="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">99.9%</span>
          <p>Uptime</p>
        </div>

      </div>

    </div>
  </section>
  );
}

