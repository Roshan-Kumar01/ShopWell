import React, { useState,Fragment,useEffect } from 'react'
import Loader from '../layout/Loader/Loader'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FaceIcon from '@mui/icons-material/Face';
import { useDispatch,useSelector } from 'react-redux';
import { clearErrors, loadUser, updateProfile } from "../../actions/userAction.js";
import { useNavigate } from 'react-router-dom';
import "./UpdateProfile.css"
import { UPDATE_PROFILE_RESET } from '../../constants/userConstants';
import MetaData from '../layout/MetaData.js';
import {toast} from "react-toastify";

const UpdateProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.user);
    const { error, isUpdated, loading } = useSelector((state) => state.profile);
    
    const [avatar, setAvatar] = useState("C:/Users/Rajiv singh/Desktop/MERN ECOMMERCE PROJECT/frontend/public/Profile.png");
    const [avatarPreview, setAvatarPreview] = useState("C:/Users/Rajiv singh/Desktop/MERN ECOMMERCE PROJECT/frontend/public/Profile.png");

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");

    useEffect(() => {

        if(user){
            setName(user.name);
            setEmail(user.email);
            setAvatar(user.avatar.url);
            setAvatarPreview(user.avatar.url);
        }
        if(error){
          toast.error(error,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            dispatch(clearErrors());
        }
        
        if (isUpdated) {
          toast.success("Profile Updated Successfully",{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

          dispatch(loadUser());
          navigate("/account");
          dispatch({
            type:UPDATE_PROFILE_RESET,
          })
        }
      }, [dispatch, error, navigate, user, isUpdated]);

    
      const updateProfileSubmit = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("avatar", avatar);
        dispatch(updateProfile(myForm));
      };
    
      const updateProfileDataChange = (e) => {
          const reader = new FileReader();
    
          reader.onload = () => {
            if (reader.readyState === 2) {
              setAvatarPreview(reader.result);
              setAvatar(reader.result);
            }
          };
    
          reader.readAsDataURL(e.target.files[0]);
      };
  return (
     <Fragment> 
        {loading? <Loader />:
           <Fragment>
           <MetaData title="Update Profile"/>
           <div className="updateProfileContainer">
               <div className="updateProfileBox">
                   <h2 className='updateProfileHeading'>Update Profile</h2>
               <form
                   className="updateProfileForm"
                   encType="multipart/form-data"
                   onSubmit={updateProfileSubmit}
                 >
                   <div className="updateProfileName">
                     <FaceIcon />
                     <input
                       type="text"
                       placeholder="Name"
                       required
                       name="name"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                     />
                   </div>
                   <div className="updateProfileEmail">
                     <MailOutlineIcon />
                     <input
                       type="email"
                       placeholder="Email"
                       required
                       name="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                     />
                   </div>
   
                   <div id="updateProfileImage">
                     <img src={avatarPreview} alt="Avatar Preview" />
                     <input
                       type="file"
                       name="avatar"
                       accept="image/*"
                       onChange={updateProfileDataChange}
                     />
                   </div>
                   <input type="submit" value="Update" className="updateProfileBtn" />
                 </form>
                </div>
           </div>
       </Fragment>
        }
     </Fragment>
  )
}

export default UpdateProfile