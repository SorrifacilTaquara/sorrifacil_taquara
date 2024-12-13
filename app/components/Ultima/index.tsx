import Image from "next/image";
import Link from "next/link";
import React from "react";

interface UltimaProps {
  isMobile: boolean;
}

export default function Ultima(props: UltimaProps) {
  return (
    <section className="w-screen max-w-[1920px] h-[20rem] xl:h-[49rem] 4xl:h-[calc(63rem+5vh)] relative">
      {!props.isMobile ? (
        <>
          <Image src={"/bina.png"} width={"6062"} height={"7920"} alt={"inicio"} className="w-[600px] 4xl:w-[900px] absolute bottom-0 right-0" />
          <Image src={"/fundo.png"} width={"1920"} height={"1200"} alt={"inicio"} className="w-full h-full" />
        </>
      ) : (
        <Image src={"/fotos_mobile/contato.png"} width={"1920"} height={"1200"} alt={"inicio"} className="w-full h-[20]" />
      )}
      <div className="absolute top-6 xl:top-[30%] left-[18%] xl:left-[8%] flex flex-col items-start ">
        <h3 className="font-semibold text-lg xl:text-4xl text-white mb-2">
          Pare de adiar seu sonho <br /> de ter um sorriso perfeito!
        </h3>
        <p className="w-[60%] xl:w-auto font-medium text-sm xl:text-1xl text-white ">
          Entre em contato agora mesmo pelo WhatsApp <br />e agende sua consulta de avaliação, estamos te esperando.
        </p>
        <Link href={"https://wa.me/555198573027"}>
          <p className="animate-pulse font-bold text-md xl:text-2xl text-white mt-5 flex gap-2 justify-center items-center bg-[#4b8c9eb2] p-2 rounded-md">Agendar agora</p>
        </Link>
      </div>
    </section>
  );
}
