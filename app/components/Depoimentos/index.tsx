import Link from "next/link";
import VideoCarousel from "../ui/Carroussel";
import { linkWhatsAppComMensagem } from "@/app/utils/helpers";

interface DepoimentosProps {
  isMobile: boolean;
}

export default function Depoimentos(props: DepoimentosProps) {
  const videoSlides = [
    { src: "/videos/video1_comprimido.mp4", type: "video/mp4" },
    { src: "/videos/video2_comprimido.mp4", type: "video/mp4" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#4db1c5] to-[#89e0eb] h-[40rem] xl:h-[40rem] flex flex-col xl:flex-row justify-around items-center relative w-full max-w-[1920px] overflow-hidden xl:overflow-auto">
      <div className="w-[20rem] h-[20rem] xl:w-[30rem] xl:h-[30rem] 4xl:w-[40rem] 4xl:h-[40rem] border-[2rem] xl:border-[5rem] border-white absolute top-[-12rem] right-[-15rem] xl:bottom-[-15rem] xl:right-[-20rem] 4xl:bottom-[-20rem] 4xl:right-[-22rem] rounded-[50%] z-50 xl:hidden" />

      <div className="flex flex-col items-center justify-center">
        <p className=" text-xl xl:text-4xl font-bold text-white">
          O que os pacientes falam
          <br />
          sobre a Sorrifácil Taquara.
        </p>
        {!props.isMobile ? (
          <Link
            href={linkWhatsAppComMensagem()}
            className="w-[18rem] xl:w-[30rem] flex"
          >
            <p className="animate-pulse font-bold text-xl xl:text-3xl text-[#4DB1C5] mt-5 flex gap-2 justify-center items-center bg-[#ffffff] p-2 rounded-md drop-shadow-lg">
              Agendar avaliação gratuita{" "}
            </p>
          </Link>
        ) : (
          <>
            <Link
              href={linkWhatsAppComMensagem()}
              className="w-[13rem] xl:w-[30rem] flex absolute top-[6rem] drop-shadow-lg z-50"
            >
              <p className=" animate-pulse font-bold text-sm xl:text-3xl text-[#4DB1C5] mt-5 flex gap-2 justify-center items-center bg-[#ffffff] p-1 rounded-md ">
                Agendar avaliação gratuita{" "}
              </p>
            </Link>
          </>
        )}
      </div>
      <div className="relative z-40">
        <VideoCarousel slides={videoSlides} />
      </div>
    </section>
  );
}
