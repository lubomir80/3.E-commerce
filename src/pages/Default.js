import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonContainer } from 'components/Button';


function Default() {

   return (
      <ErrorContainer>
         <h3>
            Page not found
         </h3>
         <ButtonContainer>
            <Link to="/" id="btn-back">
               Back to shop
            </Link>
         </ButtonContainer>
      </ErrorContainer>
   )
}

const ErrorContainer = styled.div`
text-align: center;
h3{
   margin: 2rem 0;
}
#btn-back{
   color: inherit !important;
   text-decoration: none;
}

`

export default Default