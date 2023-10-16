import Image from "next/image"
import { ItemMenu } from "./ItemMenu"
import { Search } from "./Search"
import  Logo from 'public/image/logo.svg'
import  IcoUser from 'public/image/icon-user.svg'
import { Container } from "./Container"
export function Header(){
    return(
        <header className="relative flex items-center w-full h-20 bg-primary-orange">
            <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0"></div>
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-14">
                        <Image
                            src={Logo}
                            alt="Logo do Itau bank"
                            width={48}
                            height={48}
                        />
                        <ul className="flex items-center gap-12">
                          <li><ItemMenu text="Para Você"/></li>
                          <li><ItemMenu text="Para Empresa"/></li>
                          <li><ItemMenu text="Serviços"/></li>
                          <li><ItemMenu text="Ajuda"/></li>
                        </ul>
                    </div> 
                    <div>
                        <Search/>
                    </div>
                </div>
                <button className="flex items-center gap-4 bg-primary-blue h-20 pl-3 z-10">
                    <Image
                        src={IcoUser}
                        alt="user"
                    />
                    <span className="text-white font-bold">Acessar Conta</span>
                </button>
            </Container>
        </header>
    )
}