import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import WebFont from "webfontloader"
import Header from "./component/layout/Header/Header.js"
import Footer from "./component/layout/Footer/Footer.js"
import Home from './component/Home/Home.js'
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import LoginSignUp from './component/User/LoginSignUp.js';
import { loadUser } from './actions/userAction.js';
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector, useDispatch } from 'react-redux';
import Profile from "./component/User/Profile.js"
// import ProtectedRoute from './component/Route/ProtectedRoute.js';
import UpdateProfile from "./component/User/UpdateProfile.js" 
import UpdatePassword from "./component/User/UpdatePassword.js"
import ForgotPassword from "./component/User/ForgotPassword.js"
import ResetPassword from "./component/User/ResetPassword.js"
import Cart from "./component/Cart/Cart.js" 
import Shipping from "./component/Cart/Shipping.js"
import ConfirmOrder from "./component/Cart/ConfirmOrder.js"
import axios from 'axios';
import Payment from "./component/Cart/Payment.js"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from "./component/Cart/OrderSuccess.js"
import MyOrders from "./component/Order/MyOrders.js"
import OrderDetails from "./component/Order/OrderDetails.js"
import Dashboard from "./component/Admin/Dashboard.js"
import ProductList from "./component/Admin/ProductList.js"
import NewProduct from './component/Admin/NewProduct.js';
import UpdateProduct from './component/Admin/UpdateProduct.js';
import OrderList from './component/Admin/OrderList.js';
import ProcessOrder from './component/Admin/ProcessOrder.js';
import UserList from './component/Admin/UserList.js';
import UpdateUser from './component/Admin/UpdateUser.js';
import ProductReviews from './component/Admin/ProductReviews.js';
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";
import Loader from './component/layout/Loader/Loader.js';

function App() { 
     const{isAuthenticated, user} = useSelector((state) => state.user);
     const dispatch = useDispatch();
     const [stripeApiKey, setStripeApiKey] = useState("");
     const [loading, setLoading] = useState(true);

     async function getStripeApiKey() {
      console.log("getStripeApiKey called.......");
        const { data } = await axios.get("/api/v1/stripeapikey");
        setStripeApiKey(data.stripeApiKey);
     }

     useEffect(() => {
      WebFont.load({
        google:{
          families:["Roboto", "Droid Sans", "Chilanka"],
        },
      });
      dispatch(loadUser())
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    },[dispatch])
  
    useEffect(() => {
      if(isAuthenticated) {
        getStripeApiKey();
      }
    }, [isAuthenticated]);
    
    if (loading) {
      return <Loader/>;
    }

  return (
    <Router>
      <Header />
      {isAuthenticated === true && <UserOptions user={user}/>}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
         <Route exact path="/product/:id" element={<ProductDetails />} />
         <Route exact path="/products" element={<Products />} />
         <Route  path="/products/:keyword" element={<Products />} />
         <Route exact path="/search" element={<Search />} />
         <Route exact path="/login" element={<LoginSignUp />} />
         <Route exact path="/account" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />} />
         <Route exact path="/me/update" element={isAuthenticated ? <UpdateProfile /> : <Navigate to="/login" replace />} />
         <Route exact path="/password/update" element={isAuthenticated ? <UpdatePassword /> : <Navigate to="/login" replace />} />
         <Route exact path="/password/forgot" element={<ForgotPassword />} />
         <Route exact path="/password/reset/:token" element={<ResetPassword />} />
         <Route exact path="/cart" element={<Cart/>} />
         <Route exact path="/shipping" element={isAuthenticated === false? <Navigate to="/login" replace /> : <Shipping />} />
         <Route exact path="/order/confirm" element={isAuthenticated ? <ConfirmOrder /> : <Navigate to="/login" replace />} />

         {/* <Elements stripe={loadStripe(stripeApiKey)}> */}
             <Route exact path="/process/payment" element={isAuthenticated ? (<Elements stripe={loadStripe(stripeApiKey)}> <Payment /> </Elements> ) : <Navigate to="/login" replace />} />
         {/* </Elements> */} 
         {/* <Route path="/process/payment" element={(<Elements stripe={loadStripe(stripeApiKey)}> <Payment /> </Elements> )} /> */}
         <Route exact path="/success" element={isAuthenticated ? <OrderSuccess /> : <Navigate to="/login" replace />} />
         <Route exact path="/orders" element={isAuthenticated ? <MyOrders /> : <Navigate to="/login" replace />} />
         <Route exact path="/order/:id" element={isAuthenticated ? <OrderDetails /> : <Navigate to="/login" replace />} />
         <Route exact path="/admin/dashboard" element={isAuthenticated && user.role === "admin" ? <Dashboard /> : <Navigate to="/login" replace />} />
         <Route exact path="/admin/products" element={isAuthenticated && user.role === "admin" ? <ProductList /> : <Navigate to="/login" replace />} />
         <Route exact path="/admin/product" element={isAuthenticated && user.role === "admin" ? <NewProduct /> : <Navigate to="/login" replace />} />
         <Route exact path="/admin/product/:id" element={isAuthenticated && user.role === "admin" ? <UpdateProduct /> : <Navigate to="/login" replace />} />
         <Route exact path="/admin/orders" element={isAuthenticated && user.role === "admin" ? <OrderList /> : <Navigate to="/login" replace />} />
         <Route exact path="/admin/order/:id" element={isAuthenticated && user.role === "admin" ? <ProcessOrder /> : <Navigate to="/login" replace />} />
         <Route exact path="/admin/users" element={isAuthenticated && user.role === "admin" ? <UserList /> : <Navigate to="/login" replace />} />
         <Route exact path="/admin/user/:id" element={isAuthenticated && user.role === "admin" ? <UpdateUser /> : <Navigate to="/login" replace />} />
         <Route exact path="/admin/reviews" element={isAuthenticated && user.role === "admin" ? <ProductReviews /> : <Navigate to="/login" replace />} />

       </Routes>
       <Footer />
    </Router> 
  );
}

export default App;
