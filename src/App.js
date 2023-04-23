import React ,{ Component }from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import {Home} from './components/Hero';
import { Health } from "./components/Health/Health";
import { Vegetables} from './components/Vegetables/Vegetables'
import { Eating} from './components/Eating/Eating'
import { Vitamins} from './components/Vitamins/Vitamins'
import { ShopContextProvider } from './context/shop-context'
import GameBoard from './components/Snake/GameBoard'
import MainScreen from './components/Snake/MainScreen'
import Quiz from './components/Quiz/Quiz'
import {Curd} from './components/cruds/index'
import './App.css'

function App() {
  return (
    <div>
      
      
      <AuthContextProvider>
        <ShopContextProvider>
          
        
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/health" element={<Health />}  />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          
          <Route path='/Vegetables' element={<Vegetables />} /> 
          <Route path='/Eating' element={<Eating />} />
          <Route path="/Vitamins" element={ <Vitamins />} />
          <Route path='/home' element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
          <Route  path='/mainscreen' element={<MainScreen/>}></Route>
          <Route path='/gameboardeasy' element={<GameBoard speed={200} level={'easy'}/>}></Route>
          <Route path='/gameboardmedium' element={<GameBoard speed={100} level={'medium'}/>}></Route>
          <Route path='/gameboardhard' element={<GameBoard speed={55} level={'hard'}/>}></Route>
          <Route path='/Quiz' element={<Quiz />} />
          <Route path='/order' element={<Curd />}/>
         

        </Routes>
        
        </ShopContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
