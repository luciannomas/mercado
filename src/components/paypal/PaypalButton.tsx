"use client";

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { CreateOrderData, CreateOrderActions,OnApproveActions, OnApproveData } from "@paypal/paypal-js";
import { paypalCheckPyment, setTransactionId } from "@/actions";

interface Props {
  orderId: string;
  amount: number;
}

export const PaypalButton = ({ amount, orderId }: Props) => {
  const [{ isPending }] = usePayPalScriptReducer();

  const roundedAmount = Math.round(amount * 100) / 100;

  if (isPending) {
    return (
      <div className="animate-pulse">
        <div className="h-10 bg-gray-400 rounded"></div>
        <div className="h-10 bg-gray-400 rounded mt-2"></div>
      </div>
    );
  }

  const createOrder = async (
    data: CreateOrderData,
    actions: CreateOrderActions
  ): Promise<string> => {
    const transactionId = await actions.order.create({
      purchase_units: [
        {
          invoice_id:orderId,
          amount: {
            value: `${roundedAmount}`,
          },
        },
      ],
    });

    console.log({ transactionId });

    const { ok } = await setTransactionId(orderId, transactionId);

    if (!ok) {
      throw new Error("No se pudo actualizar la orden");
    }

    return transactionId;
  };

  const onApprove = async (data: OnApproveData, actions: OnApproveActions) =>{
    console.log('onProve')
      const datails = await actions.order?.capture();
      if(!datails){ 
        console.log('no')
        return
      }
      await paypalCheckPyment(datails.id)
  }

  return (
  <div className="relative z-0">
      <PayPalButtons 
  createOrder={createOrder} 
  onApprove={onApprove}
  />;
  </div>
  )
};
