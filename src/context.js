import React, { useContext, useEffect, useState } from 'react'
import { storeProducts, detailProduct } from './data';


const AppContext = React.createContext();



const AppProvider = ({ children }) => {
   const [updated, setUpdated] = useState(false);
   const [state, setState] = useState(
      {
         product: [],
         detailProduct: detailProduct,
         myCart: [],
         modalOpen: false,
         modalProduct: detailProduct,
         cartSubTotal: 0,
         cartTax: 0,
         cartTotal: 0,
      })

   function setProducts() {
      let tempProducts = [];
      storeProducts.forEach(item => {
         const singleItem = { ...item };
         tempProducts = [...tempProducts, singleItem];
      })
      setState((curObject) => {
         return { ...curObject, product: tempProducts }
      });
   }

   useEffect(() => {
      setProducts();
   }, [])


   // ........................Handel Detaile.............................
   function getItem(id) {
      const looking = state.product.find(item => item.id === id)
      return looking;
   }

   // ........................Reset detailProduct......................
   function handelDetail(id) {
      const product = getItem(id);
      setState((prevObject) => {
         return { ...prevObject, detailProduct: product }
      });
   }

   // ........................Adding Card...............................

   function addToCard(id) {
      const tempProduct = [...state.product];
      const currentIndex = tempProduct.indexOf(getItem(id));
      const currentCard = tempProduct[currentIndex];
      currentCard.inCart = true;
      currentCard.count = 1;
      const price = currentCard.count * currentCard.price;
      currentCard.total = price;

      setState((state) => {
         return {
            ...state,
            myCart: [...state.myCart, currentCard],
         }
      })
      setUpdated(!updated);
   }


   function addTotals() {
      let subTotal = 0;
      state.myCart.map(item => (subTotal += item.total))
      const tempTax = subTotal * 0.2;
      const tax = parseFloat(tempTax.toFixed(2));
      const total = subTotal + tax;

      setState((curObject) => {
         return {
            ...curObject,
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
         }
      })
   }

   useEffect(() => {
      addTotals();
   }, [updated])


   // ...........................Open Modal.....................................

   function openModal(id) {
      const product = getItem(id);

      setState((curObject) => {
         return {
            ...curObject,
            modalOpen: true,
            modalProduct: product,
         }
      })
   }

   // ...........................Close Modal....................................

   const closeModal = () => {
      setState((curObject) => {
         return {
            ...curObject,
            modalOpen: false,
         }
      })
   }

   // ...........................Cart function..................................

   function increment(id) {
      let tempCart = [...state.myCart];
      const setProducts = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(setProducts);
      const product = tempCart[index];

      product.count += 1;
      product.total = product.count * product.price;

      setState((curObje) => {
         return { ...curObje, myCart: [...tempCart] }
      })
      addTotals();
   }

   function decrement(id) {
      let tempCart = [...state.myCart];
      const setProducts = tempCart.find(item => item.id === id);
      const index = tempCart.indexOf(setProducts);
      const product = tempCart[index];

      product.count -= 1;

      if (product.count === 0) {
         removeItem(id);
      } else {
         product.total = product.count * product.price;
         setState((curObje) => {
            return { ...curObje, myCart: [...tempCart] }
         })
         addTotals();
      }
   }



   function removeItem(id) {
      let tempProduct = [...state.product];
      let temCart = [...state.myCart];

      temCart = temCart.filter(item => item.id !== id);
      const index = tempProduct.indexOf(getItem(id));
      let removedProduct = tempProduct[index];
      removedProduct.inCart = false;
      removedProduct.count = 0;
      removedProduct.total = 0;

      setState((curObject) => {
         return {
            ...curObject,
            myCart: [...temCart],
            product: [...tempProduct]
         }
      })
      addTotals();
   }

   function clearCard() {
      setState((curObject) => {
         return { ...curObject, myCart: [] }
      })
      setProducts();
      addTotals();
   }





   return (
      <AppContext.Provider value={{
         state,
         addToCard,
         handelDetail,
         openModal,
         closeModal,
         increment,
         decrement,
         removeItem,
         clearCard,
         addTotals,
      }}>
         {children}
      </AppContext.Provider>
   )
}

export const useGlobalContext = () => {
   return useContext(AppContext);
}

export { AppProvider, AppContext };