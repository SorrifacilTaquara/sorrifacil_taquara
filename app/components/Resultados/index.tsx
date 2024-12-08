import Link from "next/link";
import Carousel from "../ui/CarrousselChildren";
import Image from "next/image";
import React from "react";

export default function Resultados() {
  return (
    <section className="h-[55rem] xl:h-[40rem] bg-white flex flex-col items-center gap-10 relative">
      <div className="hidden xl:flex w-[30rem] h-[30rem] 4xl:w-[40rem] 4xl:h-[40rem] border-[5rem] border-[#71CCDC] absolute bottom-[-15rem] left-[-18rem] 4xl:bottom-[-20rem] 4xl:left-[-22rem] rounded-[50%] z-10" />

      <div className="border-b-8 border-[#6FCADB] mt-5">
        <h3 className="translate-y-3 text-xl xl:text-3xl font-bold">Veja alguns sorrisos transformados</h3>
      </div>

      <Carousel>
        <div className="flex items-center justify-center flex-wrap gap-10">
          <Image src={"/caroussel/1.jpg"} alt={"Resultado 1"} width={400} height={400} className="border-[#6FCADB] border-8 rounded" />
          <Image src={"/caroussel/2.jpg"} alt={"Resultado 1"} width={400} height={400} className="border-[#6FCADB] border-8 rounded" />
        </div>
        <div className="flex items-center justify-center flex-wrap gap-10">
          <Image src={"/caroussel/3.jpg"} alt={"Resultado 1"} width={400} height={400} className="border-[#6FCADB] border-8 rounded" />
          <Image src={"/caroussel/4.jpg"} alt={"Resultado 1"} width={400} height={400} className="border-[#6FCADB] border-8 rounded" />
        </div>
      </Carousel>

      <Link href={"https://wa.me/555198573027"}>
        <p className="font-bold text-2xl xl:text-3xl text-white  flex gap-2 justify-center items-center bg-[#71CCDC] p-2 rounded-md">Agendar avalição gratuita</p>
      </Link>
    </section>
  );
}
