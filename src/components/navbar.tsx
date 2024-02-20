import React from "react";
import Image from "next/image";

export function Navbar() {
  return (
    <header id="header" className="fixed-top">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-9 d-flex align-items-center">
            <h1 className="logo mr-auto">
              <a href="/">
                <img
                  src="/img/thugapps.png"
                  alt="Thug Logo"
                  style={{width: '100px', maxHeight: '150px' }}
                />
              </a>
            </h1>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#features">Sobre nós</a>
                </li>
                <li>
                  <a href="#pricing">Preços</a>
                </li>
                <li>
                  <a href="https://discord.gg/9QVvGMsqbW">Discord</a>
                </li>
              </ul>
            </nav>
            {/*
            <a href="/api/auth/login" className="get-started-btn scrollto">
              Login
            </a>
            <a href="/en-us" className="get-started-btn scrollto">
              EN-US
  </a>*/}
          </div>
        </div>
      </div>
    </header>
  );
}
