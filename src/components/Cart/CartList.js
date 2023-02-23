import React from 'react'
import CartItem from "./CartItem"

function CartList(myCart) {
   if (myCart) {
      const list = myCart.value;
      return (
         <div className='container-fluid'>
            {list.map((item) => {
               return <CartItem key={item.id} item={item} />
            })}
            <CartItem />
         </div>
      )
   }
}

export default CartList