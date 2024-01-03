"use client"
import { ProductImage } from "@/components";
import { Product } from "@/interfaces";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
    
    const [ displayImage, setDisplayImage ] = useState(product.images[0])



  return (
    <div className="rounded-md  h-96 flex flex-col">
      <div className="h-80 ">
      <Link className="overflow-hidden" href={`/product/${product.slug}`}>
        <ProductImage
          src={displayImage}
          alt={product.title}
          className=" object-cover rounded h-80"
          width={600}
          height={600}
          //onMouseEnter={()=>setDisplayImage(product.images[1])}
         // onMouseLeave={()=>setDisplayImage(product.images[0])}
          
        />
      </Link>
      </div>
     
      <div className="p-4 flex flex-col h-max  ">
        <Link 
        className="hover:text-blue-600"
        href={`/product/${product.slug}`}>{product.title}</Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  );
};

