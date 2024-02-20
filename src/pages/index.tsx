import React, { useEffect, useState } from "react";
import Head from "next/head";
import AOS from "aos";
import $ from "jquery";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Home } from "../components/home/home";
import { Counts } from "../components/home/counts";
import { Features } from "../components/home/features";
import { Pricing } from "../components/home/pricing";

function Index() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Bloquear Ctrl+S e Ctrl+W
    const blockCtrlSAndCtrlW = (e) => {
      if (e.ctrlKey && (e.key === "s" || e.key === "w")) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("keydown", blockCtrlSAndCtrlW);

    return () => {
      document.removeEventListener("keydown", blockCtrlSAndCtrlW);
    };
  }, []);

  return (
    <div>
      
      <Head>
        <title>Thug Applications</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
        />
            <link rel="icon" href="/img/thugapps.png/" />
        
        {/* Coloque suas outras meta tags aqui */}
      </Head>

      <Navbar />
      <Home />
      <Counts />
      <Features />
      <Pricing />
      <Footer />
      <a href="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
     {/* <div id="preloader"></div>*/}
    </div>
  );
}

export default Index;
