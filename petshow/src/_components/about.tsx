import Image from "next/image";
import About1Img from "./../../public/about-1.png"
import About2Img from "./../../public/about-2.png"
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
    return (
        <section className="bg-[#2ad6b9] py-16">
            <div className="container px-4 mx-auto">
                <div className=" grid  grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="bg-amber-300 relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={About1Img}
                                alt="Foto cachorro e gato"
                                fill
                                quality={100}
                                className="object-cover  hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4
                        overflow-hidden">
                            <Image 
                                src={About2Img}
                                alt="Foto do cat"
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">
                            Sobre
                        </h2>
                        <p>
                            Cães e gatos, personalidades distintas sob o mesmo teto.
                            Uns com latidos e brincadeiras, outros com ronronados serenos.
                            Ambos trazem alegria e companheirismo para o lar.
                            Um amor incondicional, em quatro patas, para a vida inteira.
                        </p>

                        <ul className="spase-y-4">
                            <li className="flex items-center">
                                <Check className="text-blue-700"/>
                                Aberto 2006
                            </li>
                            <li className="flex items-center">
                                <Check className="text-blue-700"/>
                                Equipe com mais de 10 veterinários
                            </li>
                            <li className="flex items-center">
                                <Check className="text-blue-700"/>
                                Qualidade é nossa priopori
                            </li>
                        </ul>

                        <a 
                            href="#"
                            className="bg-[#2148ca] text-white flex items-center justify-center w-fit gap-2 px-4 py-2
                            rounded-md">
                            <WhatsappLogo className="w-5 h-5 text-black" />
                            Contato via WhatsApp
                        </a>
                        <a 
                            href="#"
                            className="bg-[#2148ca] text-white flex items-center justify-center w-fit gap-2 px-4 py-2
                            rounded-md">
                            <MapPin className="w-5 h-5 text-black" />
                            Endereço da loja
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}