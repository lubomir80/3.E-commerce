import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from 'context'
import { ButtonContainer } from './Button';
import { Link } from "react-router-dom";


function Modal() {
   const { state, closeModal } = useGlobalContext();
   const { title, img, price } = state.modalProduct;

   if (!state.modalOpen) {
      return
   }
   else {
      return (
         <ModalContainer>
            <div className="container" >
               <div className="row">
                  <div id="modal" className="col-8 mx-auto col-md-6
                   col-lg-4 p-5">
                     <h5>item added to the cart</h5>
                     <img src={img} className="img-fluid" alt="product" />
                     <h5>{title}</h5>
                     <h5 className='text-muted'>price : $ {price}</h5>
                     <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                           store
                        </ButtonContainer>
                     </Link>
                     <Link to="/cart">
                        <ButtonContainer onClick={() => closeModal()} cart>
                           Go to cart
                        </ButtonContainer>
                     </Link>
                  </div>
               </div>
            </div>
         </ModalContainer>
      )
   }
}

const ModalContainer = styled.div`
position: fixed;
top:0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,.3);
display: flex;
text-align: center;
align-items: center;
justify-items: center;
text-transform: capitalize;

#modal{
   background-color: var(--mainWhite);
}
`



export default Modal