"use client";

import Nav from "./components/Nav";

import Inicio from "./components/Inicio";
import Procedimentos from "./components/Procedimentos";
import Sobre from "./components/Sobre";
import Depoimentos from "./components/Depoimentos";
import Ultima from "./components/Ultima";
import Footer from "./components/Footer";
import Resultados from "./components/Resultados";

import useIsMobile from "../hooks/useIsMobile";
import React from "react";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <main className="relative overflow-x-hidden">
      {!isMobile && <Nav />}
      <div id="inicio">
        <Inicio isMobile={isMobile} />
      </div>
      <div id="procedimentos">
        <Procedimentos isMobile={isMobile} />
      </div>
      <div id="sobre">
        <Sobre isMobile={isMobile} />
      </div>
      <div id="depoimentos">
        <Depoimentos isMobile={isMobile} />
      </div>
      <div id="resultados">
        <Resultados />
      </div>
      <div>
        <Ultima isMobile={isMobile} />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
