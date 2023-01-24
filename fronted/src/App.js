
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";

import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
 import Privates from "./components/private"
 import Cart from './components/cart.js';
 import MyOrder from './components/myorder';
 import Welcome from './components/welcome';
 import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
 import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
 import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
 import { Createprovider } from './components/contexreducer';
 

function App() {
  return (
    < Createprovider>
    <BrowserRouter>
    <div>
    <Routes>
    <Route  exact path='/' element={<Welcome/>} />
      <Route  exact path='/home' element={<Home/>} />
    <Route exact path='/myorder' element={<MyOrder/>}/>
      <Route exact path='/cart'  element={<Cart/>}/>
      <Route  exact path='/login' element={<Login/>} />
      <Route  exact path='/register' element={<Register/>} />
    </Routes>
    </div>
    </BrowserRouter>
    </Createprovider>

  );
}


export default App;
