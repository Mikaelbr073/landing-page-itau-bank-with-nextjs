import { Container } from "./Container";
import Image from "next/image";
import ImgAppleStore from 'public/image/btn-apple-store.svg';
import ImgGoolePlay from 'public/image/btn-apple-store.svg';
import Arrow from 'public/image/arrow-down.svg';
import woman from 'public/image/woman.png';


export function SectionHero(){
    return(
        <section className="w-full h-[704px] bg-img_bf_hero bg-no-repeat bg-center bg-cover">
            <Container>
                <div className="flex-1 max-w-[500px]">
                    <h1 className="text-white text-6xl font-bold mb-4">Tenha seu banco na palma da sua mão</h1>
                    <p className="text-white text-xl max-w-[408px] mb-8">Todas as operações que você precisa em um só lugar. Simples
                    completo e feito para você.
                    </p>
                    <div className="flex gap-4 mb-24">
                        <button>
                            <Image
                            src={ImgAppleStore}
                            alt="ASplle Store"
                            />
                        </button>
                        <button>
                            <Image
                            src={ImgGoolePlay}
                            alt="Google play"
                            />
                        </button>
                    </div>
                    <button className="flex items-center gap-3 text-white text-sm font-bold">
                        <Image
                        src={Arrow}
                        alt="arrow down"
                        />    
                        Continue Explorando
                    </button>
                </div>

                <Image className="mr-[-41px]"
                    src={woman}
                    alt="woman"
                />
            </Container>
        </section>
    )
}