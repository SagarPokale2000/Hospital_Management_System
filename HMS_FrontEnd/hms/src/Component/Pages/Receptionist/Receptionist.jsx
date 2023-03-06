import React from 'react'
import Base from '../../Base/Base'

import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
function Receptionist() {
  return (
    <div>
        <Base>
        
        <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <Nav vertical>
  <NavItem>
    <NavLink href='AppointmentList'>
    AppointmentList
          </NavLink>
          {/* <NavLink href='HealthHistory'>
            Health History
    </NavLink> */}
  </NavItem>
      </Nav>
        
        </Base>
      
    </div>
  )
}

export default Receptionist
