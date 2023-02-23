import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from 'components/Navbar';
import ProductList from 'pages/ProductList';
import Details from 'pages/Details';
import Cart from 'pages/Cart';
import Default from 'pages/Default';
import Modal from 'components/Modal';
import Footer from 'components/Footer';
import styled from 'styled-components';


function App() {
   return (
      <Router>
         <Layout>
            <div>
               <Navbar />
               <Routes>
                  <Route exact path='/' element={<ProductList />} />
                  <Route path='/details' element={<Details />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/*' element={<Default />} />
               </Routes>
               <Modal />
            </div>
            <Footer />
         </Layout>
      </Router>
   );
}

const Layout = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;

`



export default App;
