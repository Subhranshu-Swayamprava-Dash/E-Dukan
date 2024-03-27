
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Homepage from './components/Homepage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

import Cart from './components/Cart';
//import Productdetails from './components/Productdetails';
import Error from './components/Error';
import { createContext, useReducer } from 'react';
import { initialState,reducer } from './reducer/UseReducer';
import Logout from './components/Logout';
import Product from './components/Product';
import UserPage from './components/UserPage';
//import ChatGpt from './components/ChatGpt';

export const Usecontext=createContext();
function App() {

  
   const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <Usecontext.Provider value={{state,dispatch}}> 
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage/>}/>  
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/mycart' element={<Cart/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/user' element={<UserPage/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    </Usecontext.Provider>
  );
}

export default App;

