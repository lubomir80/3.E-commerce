import React from 'react'
import { Link } from "react-router-dom"
import { ButtonContainer } from "components/Button"

function EmptyCart() {
   return (
      <div className='container mt-5'>
         <div className="row">
            <div className="col-10 mx-auto text-center text-title">
               <h1>your cart is currently empty</h1>
            </div>
            <Link to='/' style={{ textAlign: "center", marginTop: "2rem" }}>
               <ButtonContainer>
                  back to products
               </ButtonContainer>
            </Link>
         </div>
      </div>
   )
}

export default EmptyCart