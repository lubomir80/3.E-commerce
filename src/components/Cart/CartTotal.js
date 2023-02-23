import React from 'react'
import { useGlobalContext } from 'context';
import { Link } from "react-router-dom";
import PayPalBtn from './PayPalBtn';


function CartTotal({ value }) {
   const { clearCard } = useGlobalContext();
   const { cartSubTotal, cartTax, cartTotal } = value;


   return (
      <div className='container'>
         <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
               <Link to="/">
                  <button className='btn btn-outline-danger mb-3 px-5' type="button" onClick={() => clearCard()}>
                     clear carts
                  </button>
               </Link>
               <h5>
                  <span className="text-title">
                     subtotal : <strong>$ {cartSubTotal}</strong>
                  </span>
               </h5>
               <h5>
                  <span className="text-title">
                     tax : <strong>$ {cartTax}</strong>
                  </span>
               </h5>
               <h5>
                  <span className="text-title">
                     total : <strong>$ {cartTotal}</strong>
                  </span>
               </h5>
               <PayPalBtn />
            </div>
         </div>
      </div>
   )
}

export default CartTotal