import React, { useEffect } from 'react';
import "../../assets/css/informationStyle.css";
import {useDispatch, useSelector } from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import {setUser} from "../../redux/features/userSlice";

const UserInfo = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const userInfomation = useSelector((state)=> state.user.value);
  const userImg = `https://github.com/${userInfomation.userInfo.login}.png`;
  // useEffect(()=>{
  //   if(!userInfomation) navigate("/login");
    
  // },[])


  const logoutHandler = () => {
    console.log("clicked");
    navigate("/login");
    dispatch(setUser({}));

  }

  return (
    <div className='userInfo'>
      <div>
        <img className='github-img' src={userImg} alt="" />
      </div>
      <div className="github-name-box">
        <div className='github-name'>
          <label htmlFor="">{userInfomation.userInfo.login}</label>
        </div>
        <div className='logout-icon' onClick={logoutHandler}>
          <LogoutIcon />
        </div>

      </div>
    </div>
    
  )
}

export default UserInfo