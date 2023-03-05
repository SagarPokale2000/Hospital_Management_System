import React from 'react'
import CustomeNavBar from '../CustomeNavBar/CustomeNavBar'
import Footer from '../Home/Footer';
const Base = ({children})  =>{
  
  
  return (
    <div className="container-fluid p-0 m-0">

        <CustomeNavBar  />

      {children}
      <br/>
      <br/>
      <br/>
      <Footer />

    </div>
);
}

export default Base
