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
    Appointment List
          </NavLink>
          <NavLink href='AdmitPatient'>
          Admit Patient
            </NavLink>
            <NavLink href='DischargePatient'>
            Discharge Patient
    </NavLink>
  </NavItem>
      </Nav>
        </Base>
    </div>
  )
}

export default Receptionist
