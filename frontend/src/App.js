import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import WebFont from "webfontloader"
import Header from "./component/layout/Header/Header.js"
import Footer from "./component/layout/Footer/Footer.js"
import Home from './component/Home/Home.js'
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import LoginSignUp from './component/User/LoginSignUp.js';
import {store} from "./app/store.js"
import { loadUser } from './actions/userAction.js';
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js"
// import ProtectedRoute from './component/Route/ProtectedRoute.js';
import UpdateProfile from "./component/User/UpdateProfile.js" 

function App() { 
     const{isAuthenticated, user} = useSelector((state) => state.user);

     useEffect(() => {
      WebFont.load({
        google:{
          families:["Roboto", "Droid Sans", "Chilanka"],
        },
      });
      store.dispatch(loadUser());
    },[])
  
  

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user}/>}
      <Routes>
        <Route exact path="/" element={<Home />} />
         <Route exact path="/product/:id" element={<ProductDetails />} />
         <Route exact path="/products" element={<Products />} />
         <Route  path="/products/:keyword" element={<Products />} />
         <Route exact path="/search" element={<Search />} />
         <Route exact path="/login" element={<LoginSignUp />} />
         <Route exact path="/account" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />} />
         <Route exact path="/me/update" element={isAuthenticated ? <UpdateProfile /> : <Navigate to="/login" replace />} />
       </Routes>
       <Footer />
    </Router>
  );
}

export default App;
