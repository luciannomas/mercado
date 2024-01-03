"use client";
import { QuantitySelector } from "@/components";
import { CartProduct, Product } from "@/interfaces";
import { useCartStore } from "@/store";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {

  const addProductToCart = useCartStore(state=>state.addProductToCart)

  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);

    const cartProduct: CartProduct= {
      id: product.id,
      slug: product.slug,
      image: product.images[0],
      price: product.price,
      title: product.title,
      quantity: quantity,
    }

   addProductToCart(cartProduct);
   setPosted(false);
   setQuantity(1);
  };

  return (
    <>
      

     
      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

      <button className="btn-primary my-5" onClick={addToCart}>
        {" "}
        agregar al carrito
      </button>
    </>
  );
};
