import Image from "next/image";

interface Props {
    src? : string,
    alt: string;
    className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
    width: number;
    height: number
}

export const ProductImage = ({alt,height,width,className,src}:Props) => {

    const locaSrc= (src)
     ? src.startsWith('http')
        ? src
        :`/products/${src}`
    : '/imgs/placeholder.jpg'
    

  return (
    <Image src={locaSrc} width={width} height={height} alt={alt} className={className}/>

  )
}

