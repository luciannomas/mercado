"use client";

import { ProductImage, QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ProductsInCart = () => {

    const [loaded, setLoaded] = useState(false);

const updateProductQuantity = useCartStore(state=> state.updateProductQuantity)
const productInCart = useCartStore((state) => state.cart);
const removeProduct = useCartStore(state=>state.removeProduct)

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {productInCart.map((product) => (
        <div key={`${product.slug}`} className="flex mb-5">
          <ProductImage
            src={product.image}
            width={100}
            height={100}
            alt={product.title}
            className="rounded mr-5"
          />
          <div>
            <Link
              href={`/product/${product.slug}`}
              className="hover: underline cursor-pointer"
            >
              <p>
                - {product.title}
              </p>
            </Link>
            <p> ${product.price}</p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChanged={value =>updateProductQuantity(product,value)}
            />
            <button className="underline mt-3"
            onClick={()=>removeProduct(product)}
            > Remover</button>
          </div>
        </div>
      ))}
    </>
  );
};
