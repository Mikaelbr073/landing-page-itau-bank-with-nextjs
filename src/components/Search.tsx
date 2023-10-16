import IconSearch from 'public/image/icon-search.svg'
import Image from 'next/image' 
export function Search(){
    return(
        <div className='flex items-center gap-4 ml-52'>
            <Image
            src={IconSearch}
            alt='Search'
            />
            <input  className="bg-transparent pr-3 outline-none text-white placeholder:text-white" placeholder='Buscar' type="text"/>
        </div>
    )   
}