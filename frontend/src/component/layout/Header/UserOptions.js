import React, { Fragment, useState } from 'react'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'; 
import "./Header.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../actions/userAction';
import {useDispatch,useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const UserOptions = ({ user }) => {

  const {cartItems} = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  
  const options = [
    {icon: <ListAltIcon />, name:"Orders", func: orders},
    {icon: <PersonIcon />, name:"Profile", func: account},
    {icon: <ShoppingCartIcon style={{color: cartItems.length>0?"tomato":"unset"}} />, name:`Cart(${cartItems.length})`, func: cart},
    {icon: <ExitToAppIcon />, name:"Logout", func: logoutUser},
  ];
   
  if(user.role === "admin"){
    options.unshift({
        icon:<DashboardIcon />,
        name:"Dashboard",
        func: dashboard
    });
  }

  function dashboard() {
    navigate("/dashboard");
  }

  function orders() {
    navigate("/orders");
  }

  function cart() {
    navigate("/cart");
  }

  function account() {
    navigate("/account");
  }

  function logoutUser() {
    dispatch(logout());
  }

  return (
    <Fragment> 
     <Backdrop open={open} style={{zIndex:"10"}}/>
     <SpeedDial
     ariaLabel='SpeedDial tooltip example'
     onClose={() => setOpen(false)}
     onOpen={() => setOpen(true)}
     open={open}
     direction='down'
     className='speedDial'
     style={{zIndex:"11"}}
     icon={
        <img 
          className='speedDialIcon'
          src={user.avatar.url ? user.avatar.url :"./Profile.png"}
          alt='Profile'
        />
     }
     >
     {options.map((item) => (
        <SpeedDialAction 
          key={item.name}
          icon={item.icon}
          tooltipTitle={item.name}
          onClick={item.func}
          tooltipOpen={window.innerWidth<=600?true:false}
        />
     ))}
     </SpeedDial>
    </Fragment>
  )
}

export default UserOptions