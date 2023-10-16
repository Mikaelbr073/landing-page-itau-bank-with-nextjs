import { Container } from "./Container";
import Image from "next/image";
import PhoneIcon from 'public/image/icon-phone.svg'
import SolutionsIcon from 'public/image/icon-solutions.svg'
import OptionsIcon from 'public/image/icon-options.svg'
import CardIcon from 'public/image/icon-card.svg'
import Phone from 'public/image/phone.png'

export function SectionServices(){
    return(
        <section className=" relative w-full h-[965px]">
           <Container>
                <div className="flex-1 max-w-[594px] pt-32">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9">Serviços Exclusivos</span>
                    <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finaças sem sair de casa</h2>
                    <p className="text-lg max-w-[554px] mb-16">Veja como você pode cuidar das suas finaças pelo app Itaú de 
                    forma simples, rápida e melhor, no conforto da sua casa.
                    </p>
                    <ul className="flex flex-col items-start gap-3">
                        <li className="flex gap-9 items-center pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 items-center justify-center">
                                <Image
                                src={PhoneIcon}
                                alt="PhoneIcon"
                                />
                            </div>
                            <p className="flex-1 text-text-gray pr-2">Acompnhar sua conta, fazer Tranferência e
                            pagamentos de onde estiver</p>
                        </li>
                        <li className="flex gap-9 items-center pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 items-center justify-center">
                                <Image
                                src={SolutionsIcon}
                                alt="PhoneIcon"
                                />
                            </div>
                            <p className="flex-1 text-text-gray pr-2">Gerencie suas finanças sem sair de casa</p>
                        </li>
                        <li className="flex gap-9 items-center pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 items-center justify-center">
                                <Image
                                src={OptionsIcon}
                                alt="PhoneIcon"
                                />
                            </div>
                            <p className="flex-1 text-text-gray pr-2">Simule e negocie do seu jeito, monte sua proposta ou aproveite nossas ofertas pré-aprovadas</p>
                        </li>
                        <li className="flex gap-9 items-center pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 items-center justify-center">
                                <Image
                                src={CardIcon}
                                alt="PhoneIcon"
                                />
                            </div>
                            <p className="flex-1 text-text-gray pr-2">Faça o pagamento da primeira parcela e comece a organizar suas finanças! Tudo fácil e online</p>
                        </li>
                    </ul>
                </div>
           </Container>
           <div className="absolute flex items-center top-0 right-0 h-full w-[32%] bg-gray-phone">
                <Image className="translate-x-[-50%]"
                src={Phone}
                alt="Phone"
                />
           </div>
        </section>
    )
}