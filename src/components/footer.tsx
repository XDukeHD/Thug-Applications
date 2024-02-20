import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaCodepen
} from 'react-icons/fa';

export function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>

      <div className="container">
        <div className="copyright-wrap d-md-flex py-4">
          <div className="mr-md-auto text-center text-md-left">
            <div className="copyright">
              &copy; {new Date().getFullYear()} Thug Applications. All rights reserved.
            </div>
            <div className="credits">
              Thug Apps BETA <a href="https://discord.gg/9QVvGMsqbW">v1.0</a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="https://discord.gg/9QVvGMsqbW" className="Discord"><FaDiscord /></a>
          </div>
        </div>
      </div>

    </footer>
  );
}