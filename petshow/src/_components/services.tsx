'use client'
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react"
import { 
    ChevronLeft, 
    ChevronRight, 
    Scissors, 
    CarTaxiFront, 
    Hotel, 
    Syringe,
    Clock
} from "lucide-react"

import { WhatsappLogo } from "@phosphor-icons/react"

const services = [
    { 
        title:"Banho & Tosa",
        description: "Inclui banho com procutos específicos para o tipo de pelagem e pele do animal, corte de unhas limpeza das orelhas tosa personalizada (higiênica ou estilizada).",
        duration: "1h", 
        price:"$50",
        icon:<Scissors />,
        LinkText: 'Alá vi no site sobre Banho e tosa e gostaria de masi informações'
    },
    { 
        title:"Consulta Veterinaria",
        description: "Oferce atendimento clinico básico ou especializado para cuidar da saúde de animal.",
        duration: "1h", 
        price:"$45",
        icon:<Syringe />,
        LinkText: 'Alá vi no site sobre Banho e tosa e gostaria de masi informações'
    },
    { 
        title:"Táxi Pet",
        description: "Inclui banho com procutos específicos para o tipo de pelagem e pele do animal, corte de unhas limpeza das orelhas tosa personalizada (higiênica ou estilizada).",
        duration: "1h", 
        price:"$70",
        icon:<CarTaxiFront />,
        LinkText: 'Alá vi no site sobre Banho e tosa e gostaria de masi informações'
    },
    { 
        title:"Hotel para pets",
        description: "Inclui banho com procutos específicos para o tipo de pelagem e pele do animal, corte de unhas limpeza das orelhas tosa personalizada (higiênica ou estilizada).",
        duration: "1h", 
        price:"$50",
        icon:<Hotel />,
        LinkText: 'Alá vi no site sobre Banho e tosa e gostaria de masi informações'
    }
]


export function Services () {

    const [emblaRef,  emblaApi] =  useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": {slidesToScroll: 3}
        }
    })



    function scrollPrev () {
        emblaApi?.scrollPrev()
    }

    function scrollNext () {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-white py-16"> 
            <div className="container mx-auto px-4">
                <div>
                    <h1 className="text-4xl font-bold mb-12">Serviços</h1>

                    <div className="relative">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex">
                                {services.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                        <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                            <div className="flex-1 flex items-start justify-between">
                                                
                                                <div className="flex gap-4">
                                                    <span className="text-3xl">{item.icon}</span>
                                                    <div>
                                                        <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                                        <p className="text-gray-400 text-sm select-none">{item.description}</p>
                                                    </div>
                                                </div> 
                                            </div>

                                            <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{item.duration}</span>
                                                </div>

                                                <a 
                                                    href="#"
                                                    className="flex items-center justify-center gap-2 hover:bg-red-500 
                                                                px-4 py-1 rounded-md duration-300 ">
                                                        Entar em contato
                                                        <WhatsappLogo className="w-5 h-5"/>
                                                </a>
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