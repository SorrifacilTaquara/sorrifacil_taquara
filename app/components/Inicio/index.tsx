import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface InicioProps {
  isMobile: boolean;
}
export default function Inicio(props: InicioProps) {
  return (
    <section className="w-screen h-[25rem] xl:h-[55rem] 4xl:h-[calc(65rem+5vh)] relative">
      <div className="absolute  top-[4rem] xl:top-[42%] ml-[50%] translate-x-[-50%] xl:left-[8%] xl:ml-[0px] xl:translate-x-[0%]">
        <p className="font-medium text-sm xl:text-3xl text-center xl:text-start text-white">
          Conquiste o seu
          <br />
          <span className="font-bold">sorriso dos sonhos.</span>
        </p>
        <p className="font-medium text-sm xl:text-3xl text-center xl:text-start text-white mt-1 xl:mt-5">
          Com um atendimento
          <br />
          altamente qualificado.
        </p>

        <Link href={"https://wa.me/555198573027"}>
          <p className="font-bold text-sm xl:text-3xl text-white mt-1 xl:mt-5 flex gap-2 justify-center items-center bg-[#4b8c9eb2] p-2 rounded-md">
            Agendar avalição gratuita{" "}
            {!props.isMobile && (
              <span className="border border-white py-[0.20rem] px-[0.30rem] w-8 h-8 rounded-md flex items-center justify-center">
                <WhatsAppIcon sx={{ fontSize: 18 }} />
              </span>
            )}
          </p>
        </Link>
      </div>
      {!props.isMobile ? (
        <Image src={"/test.png"} width={"1920"} height={"1200"} alt={"inicio"} className="w-full h-full" />
      ) : (
        <Image src={"/fotos_mobile/inicio.png"} width={"1920"} height={"1200"} alt={"inicio"} className="w-full h-full" />
      )}
    </section>
  );
}
