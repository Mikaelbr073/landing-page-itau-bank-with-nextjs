import Image from "next/image"
import  ArrowDown from 'public/image/arrow-down.svg'
interface propsItemMenu{
    text: string;
}
export function ItemMenu(props: propsItemMenu){
    return(
        <button className="flex items-center gap-2">
            <span className="text-white font-bold">{props.text}</span>
            <Image 
                src={ArrowDown}
                alt="arrow"
            />
        </button>
    )
}