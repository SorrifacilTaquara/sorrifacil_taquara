"use client";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { linkWhatsAppComMensagem } from "@/app/utils/helpers";

const Nav = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex flex-row justify-center items-center h-16 w-full max-w-[1920px] backdrop-blur bg-[#47619c5b]/5 fixed z-10">
      <nav className="w-[60%]">
        <ul className="flex flex-row justify-around ">
          <li
            className="text-white font-semibold cursor-pointer"
            onClick={() => scrollToSection("procedimentos")}
          >
            Procedimentos
          </li>
          <li
            className="text-white font-semibold cursor-pointer"
            onClick={() => scrollToSection("sobre")}
          >
            Sobre nós
          </li>
          <li
            className="text-white font-semibold cursor-pointer"
            onClick={() => scrollToSection("depoimentos")}
          >
            Depoimentos
          </li>
          <li
            className="text-white font-semibold cursor-pointer"
            onClick={() => scrollToSection("resultados")}
          >
            Resultados
          </li>
          <li
            className="text-white font-semibold cursor-pointer"
            onClick={() => scrollToSection("footer")}
          >
            Localização
          </li>
          <li
            className="text-white font-semibold cursor-pointer"
            onClick={() => scrollToSection("footer")}
          >
            Contato
          </li>
        </ul>
      </nav>

      <div className="flex gap-4 ml-6">
        <Link
          href={linkWhatsAppComMensagem()}
          className="border border-white py-[0.20rem] px-[0.30rem] rounded-md cursor-pointer"
        >
          <WhatsAppIcon sx={{ fontSize: 18, color: "white" }} />
        </Link>
        <Link
          href={"https://www.instagram.com/sorrifacil_taquara/"}
          className="border border-white py-[0.20rem] px-[0.30rem] rounded-md cursor-pointer"
        >
          <InstagramIcon sx={{ fontSize: 18, color: "white" }} />
        </Link>
      </div>
    </header>
  );
};

export default Nav;
