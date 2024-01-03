"use client"
import { useCartStore } from '@/store'
import { currencyFormat } from '@/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Sumary = () => {

  const [ loaded,setLoaded] = useState(false)
  const { itemsInCart,subTotal,tax,total } = useCartStore(state=>state.getSummaryInformation())

  useEffect(()=>{
    setLoaded(true)
  },[])

  if(!loaded) return <p>Loading...</p>

  return (
    <div className="bg-white rounded-xl shadow-xl p-7  h-fit">
    <h2 className="text-2xl mb-2">Resumen de orden</h2>
    <div className=" grid grid-cols-2">
      <span>No Productos</span>
      <span className="text-right">{itemsInCart}</span>

      <span>Subtotal</span>
      <span className="text-right">{currencyFormat (subTotal)}</span>

      <span>impuestos</span>
      <span className="text-right">{currencyFormat (tax)}</span>

      <span className="text-2xl mt-5">Total:</span>
      <span className="text-2xl mt-5 text-right">{currencyFormat (total)}</span>

    </div>
    <div className="w-full mt-5 mb-2">
       <Link href='/checkout/address' className=" flex btn-primary  justify-center">Comprar</Link>
    </div>

  </div>
  )
}

