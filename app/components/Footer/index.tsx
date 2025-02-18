import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { linkWhatsAppComMensagem } from "@/app/utils/helpers";

export default function Footer() {
  return (
    <footer className="bg-[#71CCDC] flex flex-col xl:flex-row items-center justify-around px-24 py-12 gap-3 xl:gap-0 w-full max-w-[1920px]">
      <Image
        src={"/logo.png"}
        alt={"logo"}
        width={200}
        height={100}
        className="mt-16 xl:mt-0"
      />

      <div className="flex flex-col items-center text-white">
        <h4 className="font-semibold">Onde nos encontrar</h4>
        <p className="text-center">
          R. Bento Gonçalves, 2450 - Centro,
        </p>
        <p>Taquara - RS, 95600-118</p>
      </div>
      <div className="flex flex-col items-center text-white w-screen xl:w-auto">
        <h4 className="font-semibold">Contato</h4>
        <p>Fixo: (51) 3541-2551</p>
        <p>WhatsApp (51) 99857-3027</p>
      </div>

      <div className="flex flex-col items-center text-white -translate-y-[0.3rem]">
        <h4 className="font-semibold ">Redes Sociais</h4>
        <div className="mt-2 flex gap-3">
          <Link
            href={linkWhatsAppComMensagem()}
            className="border border-white py-[0.20rem] px-[0.30rem] rounded-md"
          >
            <WhatsAppIcon sx={{ fontSize: 18, color: "white" }} />
          </Link>
          <Link
            href={"https://www.instagram.com/sorrifacil_taquara/"}
            className="border border-white py-[0.20rem] px-[0.30rem] rounded-md"
          >
            <InstagramIcon sx={{ fontSize: 18, color: "white" }} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
