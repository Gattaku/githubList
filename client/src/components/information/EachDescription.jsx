import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import "../../assets/css/description.css";
import {useDispatch, useSelector } from "react-redux";
import {setDescription} from "../../redux/features/userSlice";

const EachDescription = (props) => {

    const dispatch = useDispatch();
    const {description} = props;
    const [toggleSwitch, setToggleSwitch] = useState(false);

    const handleToggleChange = () => {
        setToggleSwitch(!toggleSwitch);
        dispatch(setDescription(description));
    }


  return (
    <div className='each-description'>
        <div className="toggle-switch">
            <Switch 
                checked={toggleSwitch}
                onChange={handleToggleChange}
                color='primary'
            />
        </div>
        <div className='description-content'>
            <label htmlFor="">{description}</label>
        </div>
    </div>
  )
}

export default EachDescription