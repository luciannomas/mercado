"use client";
import Link from "next/link";
import { titleFont } from "@/config/font";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { useCartStore, useUiStore } from "@/store";
import { useEffect, useState } from "react";

export const Topmenu = () => {
  const openMenu = useUiStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* logo*/}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Mercado verde
          </span>
        </Link>
      </div>
      {/*center menu */}
      <div className="hidden sm:block">
        <Link
          href={"/category/Iluminacion"}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Iluminacion
        </Link>
        <Link
          href={"/category/Macetas"}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Macetas
        </Link>
        <Link
          href={"/category/Semillas "}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Semillas 
        </Link>
        <Link
          href={"/category/Carpas"}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Carpas
        </Link>
        <Link
          href={"/category/Turbinas"}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Turbinas
        </Link>
        <Link
          href={"/category/Sustratos"}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Sustratos
        </Link>
        <Link
          href={"/category/Herramientas"}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Herramientas
        </Link>
        <Link
          href={"/category/Preventivos"}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Preventivos
        </Link>
      </div>
      {/*search, cart , menu  */}
      <div className="flex items-center ">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link
          href={((totalItemsInCart === 0)&& loaded)? "/empty" : "/cart"}
          className="mx-2"
        >
          <div className="relative ">
            {loaded && totalItemsInCart > 0 && (
              <span className="fade-in absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 "
          onClick={openMenu}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
