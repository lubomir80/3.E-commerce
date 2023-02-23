import React from 'react'
import Product from "components/Product.js";
import Title from 'components/Title.js';
import { useGlobalContext } from 'context.js';


function ProductList() {
   const { state } = useGlobalContext();

   return (
      <>
         <div className="py-5">
            <div className="container">
               <Title name="our" title="products" />

               <div className="row">
                  {state.product.map((product) => {
                     return (
                        <Product key={product.id} {...product} />
                     )
                  })}
               </div>
            </div>
         </div>
      </>
   )
}

export default ProductList