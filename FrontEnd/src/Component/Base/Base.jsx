import React from 'react'
import CustomeNavBar from '../CustomeNavBar/CustomeNavBar'

const Base = ({children})  =>{
  
  
  return (
    <div className="container-fluid p-0 m-0">

        <CustomeNavBar  />

        {children}

    </div>
);
}

export default Base
