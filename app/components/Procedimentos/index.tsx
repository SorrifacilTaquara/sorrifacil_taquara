import Image from "next/image";

interface ProcedimentosProps {
  isMobile: boolean;
}

export default function Procedimentos(props: ProcedimentosProps) {
  return (
    <section className="bg-gradient-to-b from-[#4db1c5] to-[#89e0eb] flex flex-col xl:justify-center xl:pl-36 h-[25rem]">
      <h3 className="font-semibold text-2xl xl:text-3xl mt-6 xl:mt-0 text-white mb-0 xl:mb-6 text-center xl:text-start">Procedimentos</h3>
      <p className="font-medium text-sm tracking-tight xl:text-2xl text-white mb-2 xl:mb-6 text-center xl:text-start">
        Na <span className="font-bold">Clínica Sorrifácil</span>, oferecemos uma variedade de <br className=" flex xl:hidden" /> tratamentos <br className="hidden xl:flex" />
        personalizados que combinam alta tecnologia <br className=" flex xl:hidden" /> e conhecimento especializado <br className=" hidden xl:flex" />
        para restaurar e transformar o seu sorriso
      </p>

      {!props.isMobile ? (
        <div className="flex">
          <div className="flex flex-col gap-8">
            <div className="flex gap-10">
              {["Odontologia Preventiva", "Implantadotia", "Ortodontia", "Protocolo", "Cirurgia Oral Menor"].map((text, index) => (
                <div key={index} className="flex items-center justify-center px-2 gap-4 py-1 bg-white rounded overflow-hidden group cursor-pointer">
                  <div className="transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1">
                    <Image src={"/icone_logo.png"} width={"20"} height={"20"} alt={"inicio"} />
                  </div>
                  <p className="font-normal text-1xl">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-10">
              {["Facetas de Resina", "Reabilitação Oral", "Edondodontia (Canal)", "Prótese Dentária"].map((text, index) => (
                <div key={index} className="flex items-center justify-center px-2 gap-4 py-1 bg-white rounded overflow-hidden group cursor-pointer">
                  <div className="transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1">
                    <Image src={"/icone_logo.png"} width={"20"} height={"20"} alt={"inicio"} />
                  </div>
                  <p className="font-normal text-1xl">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 mt-3">
          <div className="flex">
            <div className="flex items-center justify-center px-2 gap-4 py-1 bg-white rounded overflow-hidden group cursor-pointer">
              <div className="transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1">
                <Image src={"/icone_logo.png"} width={"15"} height={"15"} alt={"inicio"} />
              </div>
              <p className="font-normal text-xs">Odontologia Preventiva</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex items-center justify-center px-2 gap-4 py-1 bg-white rounded overflow-hidden group cursor-pointer">
              <div className="transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1">
                <Image src={"/icone_logo.png"} width={"15"} height={"15"} alt={"inicio"} />
              </div>
              <p className="font-normal text-xs">Facetas de Resina</p>
            </div>
            <div className="flex items-center justify-center px-2 gap-4 py-1 bg-white rounded overflow-hidden group cursor-pointer">
              <div className="transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1">
                <Image src={"/icone_logo.png"} width={"15"} height={"15"} alt={"inicio"} />
              </div>
              <p className="font-normal text-xs">Reabilitação Oral</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex items-center justify-center px-2 gap-4 py-1 bg-white rounded overflow-hidden group cursor-pointer">
              <div className="transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1">
                <Image src={"/icone_logo.png"} width={"15"} height={"15"} alt={"inicio"} />
              </div>
              <p className="font-normal text-xs">Ortodontia</p>
            </div>
            <div className="flex items-center justify-center px-2 gap-4 py-1 bg-white rounded overflow-hidden group cursor-pointer">
              <div className="transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1">
                <Image src={"/icone_logo.png"} width={"15"} height={"15"} alt={"inicio"} />
              </div>
              <p className="font-normal text-xs">Cirurgia Oral Menor</p>
            </div>
            <div className="flex items-center justify-center px-2 gap-4 py-1 bg-white rounded overflow-hidden group cursor-pointer">
              <div className="transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1">
                <Image src={"/icone_logo.png"} width={"15"} height={"15"} alt={"inicio"} />
              </div>
              <p className="font-normal text-xs">Protocolo</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex items-center justify-center px-2 gap-4 py-1 bg-white rounded overflow-hidden group cursor-pointer">
              <div className="transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1">
                <Image src={"/icone_logo.png"} width={"15"} height={"15"} alt={"inicio"} />
              </div>
              <p className="font-normal text-xs">Edodontia (Canal)</p>
            </div>
            <div className="flex items-center justify-center px-2 gap-4 py-1 bg-white rounded overflow-hidden group cursor-pointer">
              <div className="transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1">
                <Image src={"/icone_logo.png"} width={"15"} height={"15"} alt={"inicio"} />
              </div>
              <p className="font-normal text-xs">Prótese Dentária</p>
            </div>
          </div>

          <div className="flex">
            <div className="flex items-center justify-center px-2 gap-2 py-1 bg-white rounded overflow-hidden group cursor-pointer">
              <div className="transition-transform duration-300 ease-in-out transform group-hover:-translate-y-1">
                <Image src={"/icone_logo.png"} width={"15"} height={"15"} alt={"inicio"} />
              </div>
              <p className="font-normal text-xs">Implantodontia</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
