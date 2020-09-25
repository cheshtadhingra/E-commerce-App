import React from 'react';
import NavBar from './Components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import CategoryBar from './Components/CategoryBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Men from './Components/Men';
import Women from './Components/Women';
import Electronics from './Components/electronics';
import HomeDecor from './Components/Homedecor';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
//specifying Routes
function App(){
   return(
     <Switch>
       <Route exact path="/"
         component={Home}/>
         <Route  path="/men"
         component={Men}/>
         <Route  path="/women"
         component={Women}/>
         <Route  path="/electronics"
         component={Electronics}/>
         <Route path="/home"
         component={HomeDecor}/>
         <Route path="/Cart"
         component={Cart}/>
         <Route path="/Checkout"
         component={Checkout}/>
     </Switch>
   )
}

export default ()=>{
  return (   
 <BrowserRouter>
    <NavBar />
        <CategoryBar />
        <App />
        <Footer />
    </BrowserRouter>   
  );
}
