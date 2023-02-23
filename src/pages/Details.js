import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from 'context';
import { ButtonContainer } from 'components/Button';

function Details() {
   const { state, addToCard, openModal } = useGlobalContext();
   const { id, company, img, info, price, title, inCart } = state.detailProduct;




   return (
      <div className="container py-5">
         {/* title */}
         <div className="row">
            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
               <h1>{title}</h1>
            </div>
         </div>
         {/* end title */}

         {/* Prodact info */}
         <div className="row">
            <div className='col-10 mx-auto col-md-6 my-3'>
               <img src={img} alt={title} className="img-fluid" />
            </div>
            <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
               <h2>model: {title}</h2>
               <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                  made by: <span className='text-uppercase'>{company}</span></h4>
               <h4 className="text-blue"><strong>price : <span>$</span>{price}</strong></h4>
               <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product:
               </p>
               <p className="text-muted lead">{info}</p>
               {/* Buttons */}
               <div>
                  <Link to="/">
                     <ButtonContainer>
                        back to product
                     </ButtonContainer>
                  </Link>
                  <ButtonContainer
                     cart
                     disabled={inCart ? true : false}
                     onClick={
                        () => { addToCard(id); openModal(id) }
                     }
                  >
                     {inCart ? "inCart" : "add to Cart"}
                  </ButtonContainer>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Details