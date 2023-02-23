import React from 'react'
import styled from 'styled-components'

function Footer() {
   const date = new Date()
   const year = date.getFullYear()

   return (
      <Footter className='text-center p-3 '>
         <p>&#169; {year} Copyright: <a href='https://github.com/lubomir80' target="_blank">Lubomir</a>.
            Was made for my own portfolio not for sale.</p>
      </Footter>
   )
}

const Footter = styled.div`
background-color: var(--mainBlue);
color:var(--mainWhite) !important;

& a{
   text-decoration: none;
   color:var(--mainYellow) !important;
   text-transform: capitalize;
   transition: all .3s ease-in;
}

& a:hover{
   color:var(--mainYellow1) !important;
}

`



export default Footer