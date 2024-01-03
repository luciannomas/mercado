"use client";
import { getStockByslug } from "@/actions";
import { titleFont } from "@/config/font";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getStock = async () => {
      //llamar server action
      const insStock = await getStockByslug(slug);
      setStock(insStock);
      setIsLoading(false);
    };
    getStock();
  }, [slug]);



  return (
    <>
      {isLoading ? (
        <h1
          className={`${titleFont.className} antialiased font-bold text-lg bg-gray-200 animate-pulse`}
        >
          {" "}
          &nbsp;{" "}
        </h1>
      ) : (
        <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
          {" "}
          Stock: {stock}{" "}
        </h1>
      )}
    </>
  );
};
