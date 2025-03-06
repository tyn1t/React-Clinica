'use client'
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { 
    ChevronLeft, 
    ChevronRight, 
    Scissors, 
    CarTaxiFront, 
    Hotel, 
    Syringe,
    Clock
} from "lucide-react";

import Tutor1  from "./../../public/tutor1.png";
import Image from "next/image";


const testimonials = [
    {
        content: "Cuidar de um pet vai muito além de alimentá-lo e dar-lhe água. É essencial que você se dedique ao seu bem-estar, oferecendo momentos de lazer e carinho. Brinquedos, exercícios e alimentação saudável são fundamentais para a qualidade de vida do seu animal. Além disso, leve seu pet para consultas periódicas ao veterinário para garantir que ele esteja saudável. O afeto e o tempo de qualidade que você dedica ao seu pet criam.",
        author: "João Silva",
        role: "Veterinário",
        img: "/thispersondoesnotexist1.jpg"
    },
    {
        content: "A socialização é uma das etapas mais importantes no desenvolvimento de um pet. Quando filhote, o animal está mais aberto a novas experiências e estímulos, o que torna o processo de adaptação ao mundo muito mais fácil. Leve seu pet para passeios, apresente-o a novos ambientes, a diferentes sons e, principalmente, a outros animais e pessoas. Isso contribui para o seu comportamento equilibrado.",
        author: "Maria Oliveira",
        role: "Adestradora",
        img:"/thispersondoesnotexist2.jpg"
    },
    {
        content: "A saúde do seu pet depende de cuidados preventivos contínuos. Vacinas são fundamentais para proteger seu amigo contra doenças graves e até fatais. É essencial seguir o calendário de vacinação recomendado pelo veterinário e manter o controle das verminoses e outros cuidados preventivos. Além disso, a realização de check-ups regulares é uma forma de identificar possíveis problemas antes que eles se tornem sérios. Seu pet confia.",
        author: "Carlos Almeida",
        role: "Veterinário",
        img: "/thispersondoesnotexist3.jpg"
    }
];


testimonials



export function Testimonials () {

    const [emblaRef,  emblaApi] =  useEmblaCarousel({
        loop: true,
    })



    function scrollPrev () {
        emblaApi?.scrollPrev()
    }

    function scrollNext () {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-[#3fcfa9] py-16"> 
            <div className="container mx-auto px-4">
                <div>
                    <h1 className="text-4xl text-center font-bold mb-12">Depoimentos de nossos clientes</h1>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {testimonials.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                        <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                            <div className="flex flex-col items-center text-center space-y-4">
                                                <div className="relative w-24 h-24">
                                                    <Image 
                                                        src={item.img}
                                                        alt={item.author}
                                                        fill
                                                        sizes="96px"
                                                        className="object-cover rounded-full"
                                                    />
                                                </div>
                                                <p className="text-gray-500">{item.content}</p>

                                                <div>
                                                    <p className="font-bold">{item.author}</p>
                                                    <p className="text-sm  text-gray-400">{item.role}</p>
                                                </div>
                                            </div>

                                        </article>
                                    </div>
                                ))}
                            </div>
                        <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 
                            -translate-y-1/2 -translate-x-1/2 top-1/2">
                            <ChevronLeft 
                                onClick={scrollPrev}
                                className=" w-6 h-6 text-gray-600"
                            />
                        </button>

                        <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 
                            -translate-y-1/2 -translate-x-1/2 top-1/2">
                            <ChevronRight 
                                onClick={scrollNext}
                                className=" w-6 h-6 text-gray-600"
                            />
                        </button>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}