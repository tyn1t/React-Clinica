import golden from "./../../public/golden.png"
import royal from "./../../public/royal.png"
import primier from "./../../public/primier.png"
import whiskas from "./../../public/whiskas.png"
import natural from "./../../public/natural.png"
import Image from "next/image"
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr"


const brands = [
    { name:"golden", logo: golden},
    { name:"royal Canin",  logo: royal},
    { name:"primier", logo: primier},
    { name: "whiskas", logo: whiskas},
    { name: "Golden natural", logo: natural},
]
export function Fooder ()  {
    return (
    <section className="flex  bg-[#2148ca] py-16 text-white">
        <div className="flex flex-col  justify-center container mx-auto px-4">

            <div className=" border-b  border-white/20 pb-8">
                <h4 className="text-3xl font-semibold mb-8 text-center">Marcas que trabalhamos</h4>
                
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mx-auto justify-center">

                    {brands.map((item, index) => (
                        <div key={index} className="flex relative bg-white p-4 py-5 rounded-lg items-center justify-center">
                                <Image 
                                    src={item.logo}
                                    alt={item.name}
                                    width={100}
                                    height={50}
                                    quality={100}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mx-auto justify-between gap-8 md-12 mt-5">
                    <div>
                        <h3 className="text-2xl font-semibold md-2">Pet Shop Dev</h3>
                        <p>Cuidando do seu melhor amigo co amor e dedicação.</p>

                        <a href="#" className="bg-green-500 relative px-4 py-2 top-4 rounded-md">
                            Contato via whatsApp
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold md-2">Contatos</h3>
                        <p>Email: teste@gmail.com</p>
                        <p>Telefone: (xx) 123456789</p>
                        <p>Rua x, centro Manaus Amazonas </p>
                    </div>

                    <div className="flex flex-col mx-auto justify-center">
                        <h3 className="relative text-2xl font-semibold text-center -top-4 py-2 ">Contatos</h3>
                        <div className="flex relative gap-4">
                            <a 
                                href="#"
                                target="_blank">
                                <FacebookLogo className="w-8 h-8"/>
                            </a>
                            <a 
                                href="#"
                                target="_blank">
                                <InstagramLogo className="w-8 h-8"/>
                            </a>
                            <a 
                                href="#"
                                target="_blank">
                                <YoutubeLogo className="w-8 h-8"/>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}