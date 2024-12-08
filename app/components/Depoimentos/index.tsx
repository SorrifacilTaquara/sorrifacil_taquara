import Link from "next/link";
import VideoCarousel from "../ui/Carroussel";

interface DepoimentosProps {
  isMobile: boolean;
}

export default function Depoimentos(props: DepoimentosProps) {
  const videoSlides = [
    { src: "/videos/video1_comprimido.mp4", type: "video/mp4" },
    { src: "/videos/video2_comprimido.mp4", type: "video/mp4" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#4db1c5] to-[#89e0eb] h-[40rem] xl:h-[40rem] flex flex-col xl:flex-row justify-around items-center relative">
      <div className="flex flex-col items-center justify-center">
        <p className=" text-xl xl:text-4xl font-bold text-white text-shadow-sm">
          O que os pacientes falam
          <br />
          sobre a Sorrifácil Taquara.
        </p>
        {!props.isMobile ? (
          <Link href={"https://wa.me/555198573027"} className="w-[18rem] xl:w-[30rem] flex">
            <p className="font-bold text-xl xl:text-3xl text-[#4DB1C5] mt-5 flex gap-2 justify-center items-center bg-[#ffffff] p-2 rounded-md drop-shadow-lg">Agendar avalição gratuita </p>
          </Link>
        ) : (
          <>
            <Link href={"https://wa.me/555198573027"} className="w-[13rem] xl:w-[30rem] flex absolute top-[6rem] drop-shadow-lg z-10">
              <p className="font-bold text-sm xl:text-3xl text-[#4DB1C5] mt-5 flex gap-2 justify-center items-center bg-[#ffffff] p-1 rounded-md ">Agendar avalição gratuita </p>
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
