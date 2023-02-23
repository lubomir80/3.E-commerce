import React from 'react'
import { useGlobalContext } from '../context'
import Title from 'components/Title';
import CartColumms from 'components/Cart/CartColumms';
import EmptyCart from 'components/Cart/EmptyCart';
import CartList from 'components/Cart/CartList';
import CartTotal from 'components/Cart/CartTotal';





function Cart() {
   const { state } = useGlobalContext();
   const { myCart } = state;


   if (myCart.length > 0) {
      return (
         <section className='p-4'>
            <Title name={`Your`} title={`Cart`} />
            <CartColumms />
            <CartList value={myCart} />
            <CartTotal value={state} />
         </section>
      )
   } else {
      return (
         <section>
            <EmptyCart />
         </section>
      )
   }
}

export default Cart