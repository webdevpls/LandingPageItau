import Image from "next/image";
import { Container } from "./Container";


import PhoneIcon from '@/assets/icon-phone.svg'
import SoluctionIconfrom from '@/assets/icon-solutions.svg'
import Icon from '@/assets/icon-card.svg'
import iconTwo from '@/assets/icon-options.svg'

import ImagePhone from '@/assets/phone.png'

export function SectionService() {
    return(
        <section className="relative w-full h-[965px]">
            <Container>

            <div className="flex-1 max-w-[594px] pt-32">
                <span className=" block text-primary-oragne text-sm font-bold uppercase mb-9">Serviços exclusivos</span>
                <h2  className="text-primary-gray text-[56px] font-bold leading-tight mb-6
                ">Gerencie suas finanças sem sair de casa</h2>
                <p className="text-lg max-w-[554px] mb-[64px] text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, 
                    rápida e o melhor, no conforto da sua casa.</p>

                    <ul className=" flex flex-col items-start gap-9 ">
                        <li className="flex items-center gap-8 border-b-[1px] pb-8
                         border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                            <Image src={PhoneIcon} alt="PhoneIcon"/>
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Acompanhar sua conta, fazer transferências e pagamentos 
                                de onde estiver. </p>
                        </li>
                        <li className="flex items-center gap-8 border-b-[1px] pb-8
                         border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                            <Image src={SoluctionIconfrom} alt="PhoneIcon"/>
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Soluções de emprestimo e renegociações para organizar suas finanças. 
                                de onde estiver. </p>
                        </li>
                        <li className="flex items-center gap-8 border-b-[1px] pb-8
                         border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                            <Image src={iconTwo} alt="PhoneIcon"/>
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Diversas opções de invenstimentos, de acordo com o seu perfil de investidor. </p>
                        </li>
                        <li className="flex items-center gap-8
                         border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                            <Image src={Icon} alt="PhoneIcon"/>
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Acompanhe sua fatura de seu cartão de credito e faça compras online com seu cartão virtual. </p>
                        </li>
                    </ul>
            </div>

            </Container>

            <div className="absolute top-0 right-0 flex items-center  w-[32%] h-full bg-gray-300 ">
                <Image src={ImagePhone} alt="Phone" className="translate-x-[-50%]"/>
            </div>
        </section>
    )
}