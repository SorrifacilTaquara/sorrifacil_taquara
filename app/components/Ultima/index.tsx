import Image from "next/image";
import Link from "next/link";
import React from "react";

interface UltimaProps {
  isMobile: boolean;
}

export default function Ultima(props: UltimaProps) {
  return (
    <section className="w-screen h-[20rem] 4xl:h-[calc(60rem+5vh)] relative">
      {!props.isMobile ? (
        <Image src={"/ultima.png"} width={"1920"} height={"1200"} alt={"inicio"} className="w-full h-full" />
      ) : (
        <Image src={"/fotos_mobile/contato.png"} width={"1920"} height={"1200"} alt={"inicio"} className="w-full h-[20]" />
      )}
      <div className="absolute top-6 xl:top-[30%] left-[18%] xl:left-[8%] flex flex-col items-start ">
        <h3 className="font-semibold text-xl xl:text-4xl text-white mb-2">
          Pare de adiar seu sonho <br /> de ter um sorriso perfeito!
        </h3>
        <p className="w-[60%] xl:w-auto font-medium text-sm xl:text-1xl text-white ">
          Entre em contato agora mesmo pelo WhatsApp <br />e agende sua consulta de avalição, estamos te esperando.
        </p>
        <Link href={"https://wa.me/555198573027"}>
          <p className="font-bold text-md xl:text-2xl text-white mt-5 flex gap-2 justify-center items-center bg-[#4b8c9eb2] p-2 rounded-md">Agendar agora</p>
        </Link>
      </div>
    </section>
  );
}