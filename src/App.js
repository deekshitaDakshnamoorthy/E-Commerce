import logo from './logo.svg';
import './App.css';
import DrawerAppBar from './components/navBar';
import productService from './components/productService';
import Products from './components/Products';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
     

   <DrawerAppBar/>
   <productService/>
   <Products/> 
   
   </div>

  );
}

export default App;
