import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SobreProps {
  isMobile: boolean;
}
export default function Sobre(props: SobreProps) {
  return (
    <section className="w-screen max-w-[1920px] h-[23rem] xl:h-[40rem] 4xl:h-[calc(50rem+5vh)] relative z-">
      {!props.isMobile ? (
        <Image src={"/test_2.png"} width={"1920"} height={"1200"} alt={"inicio"} className="w-full h-full" />
      ) : (
        <Image src={"/fotos_mobile/sobre.png"} width={"1920"} height={"1200"} alt={"inicio"} className="w-full h-full relative z-10" />
      )}
      <div className="w-[20rem] h-[20rem] xl:w-[30rem] xl:h-[30rem] 4xl:w-[40rem] 4xl:h-[40rem] border-[3rem] xl:border-[5rem] border-white absolute bottom-[-8rem] right-[-14rem] xl:bottom-[-15rem] xl:right-[-20rem] 4xl:bottom-[-20rem] 4xl:right-[-22rem] rounded-[50%] z-50" />

      <div className="absolute  top-5 xl:top-[20%] right-[4%] xl:right-[8%] flex flex-col items-end z-10 xl:z-0 ">
        <h3 className="font-semibold text-2xl xl:text-4xl text-white mb-6 text-right">Sobre nós</h3>
        <p className="font-medium text-md xl:text-2xl text-white text-right">
          A Sorrifácil Taquara é uma Clínica <br />
          Odontológica que prioriza o bem-estar <br />e a confiança dos nossos pacientes.
        </p>
        <p className="font-medium text-md xl:text-2xl text-white text-right mt-4">
          Com uma equipe de especialistas e uma
          <br />
          estrutura moderna, buscamos oferecer <br />
          tratamentos de alta qualidade e um <br />
          atendimento personalizado.
        </p>
        <Link href={"https://wa.me/555198573027"}>
          <p className="font-bold text-xl xl:text-3xl text-white mt-5 flex gap-2 justify-center items-center bg-[#4b8c9eb2] p-2 rounded-md">Agendar avaliação gratuita</p>
        </Link>
      </div>
    </section>
  );
}
