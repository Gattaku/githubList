import React from 'react'
import UserInfo from './UserInfo'
import Description from './Description'
import "../../assets/css/informationStyle.css"

const Header = () => {
  return (
    <div className='header'>
        <UserInfo /> 
        <Description />
    </div>
  )
}

export default Header